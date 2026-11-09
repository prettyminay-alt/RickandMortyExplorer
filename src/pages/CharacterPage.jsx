import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CharacterDetails from '../components/characters/CharacterDetails'
import EmptyState from '../components/common/EmptyState'
import ErrorMessage from '../components/common/ErrorMessage'
import Loading from '../components/common/Loading'
import { getCharacterById, getEpisodes } from '../services/rickAndMortyApi'

export default function CharacterPage() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const fetchCharacter = async () => {
      setLoading(true)
      setError('')

      try {
        const data = await getCharacterById(id)

        if (!isMounted) {
          return
        }

        setCharacter(data)

        const episodeIds = (data.episode || []).map((url) => Number(url.split('/').at(-1))).filter(Boolean)
        const episodeData = await getEpisodes(episodeIds)

        if (isMounted) {
          setEpisodes(episodeData)
        }
      } catch (fetchError) {
        if (!isMounted) {
          return
        }

        setCharacter(null)
        setEpisodes([])
        setError(fetchError.message || 'Unable to load character details.')
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
  }, [id])

  if (loading) {
    return <Loading message="Loading character profile..." />
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={() => window.location.reload()} />
  }

  if (!character) {
    return (
      <EmptyState
        title="Character not found"
        message="This traveler does not exist in the current registry."
        actionLabel="Return home"
        onAction={() => (window.location.href = '/')} 
      />
    )
  }

  return <CharacterDetails character={character} episodes={episodes} />
}
