import { useEffect, useMemo, useState } from 'react'
import { Database, SearchIcon, Sparkles, Zap } from 'lucide-react'
import CharacterFilters from '../components/characters/CharacterFilters'
import CharacterGrid from '../components/characters/CharacterGrid'
import SearchBar from '../components/characters/SearchBar'
import EmptyState from '../components/common/EmptyState'
import ErrorMessage from '../components/common/ErrorMessage'
import Loading from '../components/common/Loading'
import Pagination from '../components/common/Pagination'
import { getCharacters } from '../services/rickAndMortyApi'

const sortOptions = {
  'id-asc': (a, b) => a.id - b.id,
  'id-desc': (a, b) => b.id - a.id,
  'name-asc': (a, b) => a.name.localeCompare(b.name),
  'name-desc': (a, b) => b.name.localeCompare(a.name),
}

export default function Home() {
  const [characters, setCharacters] = useState([])
  const [pageInfo, setPageInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState('all')
  const [species, setSpecies] = useState('all')
  const [gender, setGender] = useState('all')
  const [sortBy, setSortBy] = useState('id-asc')
  const [page, setPage] = useState(1)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    let isMounted = true

    const fetchCharacters = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await getCharacters({
          name: searchTerm,
          status: status === 'all' ? undefined : status.toLowerCase(),
          species: species === 'all' ? undefined : species,
          gender: gender === 'all' ? undefined : gender.toLowerCase(),
          page,
        })

        if (!isMounted) {
          return
        }

        setCharacters(response.results || [])
        setPageInfo(response.info || null)
      } catch (fetchError) {
        if (!isMounted) {
          return
        }

        setCharacters([])
        setPageInfo(null)
        setError(fetchError.message || 'Unable to load characters right now.')
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchCharacters()

    return () => {
      isMounted = false
    }
  }, [page, searchTerm, status, species, gender, refreshKey])

  const sortedCharacters = useMemo(() => {
    const current = [...characters]
    const sorter = sortOptions[sortBy] || sortOptions['id-asc']
    return current.sort(sorter)
  }, [characters, sortBy])

  const applySearch = () => {
    setSearchTerm(searchInput.trim())
    setPage(1)
  }

  const clearSearch = () => {
    setSearchInput('')
    setSearchTerm('')
    setPage(1)
  }

  const handleStatusChange = (nextStatus) => {
    setStatus(nextStatus)
    setPage(1)
  }

  const handleSpeciesChange = (nextSpecies) => {
    setSpecies(nextSpecies)
    setPage(1)
  }

  const handleGenderChange = (nextGender) => {
    setGender(nextGender)
    setPage(1)
  }

  const handlePageNext = () => {
    if (pageInfo && page < pageInfo.pages) {
      setPage((current) => current + 1)
    }
  }

  const handlePagePrevious = () => {
    if (page > 1) {
      setPage((current) => current - 1)
    }
  }

  return (
    <>
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Universe Archive</p>
          <h1>Explore the Multiverse.</h1>
          <p>
            Discover interdimensional characters, filter the archive by status and species, and bookmark your favorite beings from across a hundred worlds.
          </p>
          <div className="hero-stats">
            <div>
              <Sparkles size={18} />
              <strong>{pageInfo?.count || 0}</strong>
              <span>Total characters</span>
            </div>
            <div>
              <Database size={18} />
              <strong>{pageInfo?.pages || 1}</strong>
              <span>Pages</span>
            </div>
            <div>
              <Zap size={18} />
              <strong>{characters.length}</strong>
              <span>On this page</span>
            </div>
          </div>
        </div>
      </section>

      <section className="toolbar-panel card-panel">
        <div className="toolbar-header">
          <div className="search-label-wrap">
            <SearchIcon size={18} />
            <span>Character Search</span>
          </div>
          <span className="meta-note">Sorting is applied to the currently displayed page.</span>
        </div>

        <SearchBar
          value={searchInput}
          onChange={setSearchInput}
          onSubmit={applySearch}
          onClear={clearSearch}
        />

        <CharacterFilters
          status={status}
          species={species}
          gender={gender}
          sortBy={sortBy}
          onStatusChange={handleStatusChange}
          onSpeciesChange={handleSpeciesChange}
          onGenderChange={handleGenderChange}
          onSortChange={setSortBy}
        />
      </section>

      {loading ? (
        <Loading message="Loading interdimensional profiles..." />
      ) : error ? (
        <ErrorMessage message={error} onRetry={() => setRefreshKey((current) => current + 1)} />
      ) : sortedCharacters.length === 0 ? (
        <EmptyState
          title="No matching characters found"
          message="Try a different search, or clear your filters to explore the full multiverse."
          actionLabel="Clear filters"
          onAction={clearSearch}
        />
      ) : (
        <>
          <div className="results-summary">
            <p>
              Showing <strong>{sortedCharacters.length}</strong> results for{' '}
              <strong>{searchTerm || 'all characters'}</strong>
            </p>
          </div>

          <CharacterGrid characters={sortedCharacters} />

          <Pagination
            page={page}
            totalPages={pageInfo?.pages || 1}
            onPrevious={handlePagePrevious}
            onNext={handlePageNext}
          />
        </>
      )}
    </>
  )
}
