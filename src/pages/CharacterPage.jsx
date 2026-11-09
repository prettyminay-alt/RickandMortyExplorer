import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CharacterDetails from '../components/characters/CharacterDetails'
import EmptyState from '../components/common/EmptyState'
import ErrorMessage from '../components/common/ErrorMessage'
import Loading from '../components/common/Loading'
import { getCharacterById, getEpisodes } from '../services/rickAndMortyApi'

export default function CharacterPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [character, setCharacter] = useState(null)
  const [episodes, setEpisodes] = useState([])
  const [episodesError, setEpisodesError] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [notFound, setNotFound] = useState(false)
  const [retryKey, setRetryKey] = useState(0)

  useEffect(() => {
    let isMounted = true

    const fetchCharacter = async () => {
      setLoading(true)
      setError('')
      setEpisodesError('')
      setNotFound(false)
      setCharacter(null)
      setEpisodes([])

      try {
        const data = await getCharacterById(id)

        if (!isMounted) {
          return
        }

        setCharacter(data)

        const episodeIds = (data.episode || []).map((url) => Number(url.split('/').at(-1))).filter(Boolean)
        try {
          const episodeData = await getEpisodes(episodeIds)
          if (isMounted) {
            setEpisodes(episodeData)
          }
        } catch (episodeError) {
          if (isMounted) {
            setEpisodesError(episodeError.message || 'Unable to load episode information.')
          }
        }
      } catch (fetchError) {
        if (!isMounted) {
          return
        }

        setCharacter(null)
        setEpisodes([])
        if (fetchError.status === 404) {
          setNotFound(true)
        } else {
          setError(fetchError.message || 'Unable to load character details.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchCharacter()

    return () => {
      isMounted = false
    }
  }, [id, retryKey])

  if (loading) {
    return <Loading message="Loading character profile..." />
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={() => setRetryKey((current) => current + 1)} />
  }

  if (notFound) {
    return (
      <EmptyState
        title="Character not found"
        message="This character could not be found. Check the ID or return to the Explorer."
        actionLabel="Return home"
        onAction={() => navigate('/')}
      />
    )
  }

  if (!character) {
    return (
      <EmptyState
        title="Character not found"
        message="This traveler does not exist in the current registry."
        actionLabel="Return home"
        onAction={() => navigate('/')}
      />
    )
  }

  return (
    <CharacterDetails
      character={character}
      episodes={episodes}
      episodesError={episodesError}
      onRetryEpisodes={() => setRetryKey((current) => current + 1)}
    />
  )
}
