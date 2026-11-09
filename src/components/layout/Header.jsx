import { Heart, Home, Info, Rocket } from 'lucide-react'
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import SearchBar from '../characters/SearchBar'
import { useFavorites } from '../../hooks/useFavorites'

export default function Header() {
  const { count } = useFavorites()
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()

  const submitSearch = (searchInput) => {
    const term = searchInput.trim()
    const params = new URLSearchParams()

    if (term) {
      params.set('name', term)
    }

    navigate({
      pathname: '/',
      search: params.toString() ? `?${params.toString()}` : '',
    })
  }

  const clearSearch = () => {
    if (location.pathname === '/') {
      navigate('/', { replace: true })
      return
    }

    navigate('/')
  }

  return (
    <header className="topbar">
      <div className="container nav-shell">
        <NavLink to="/" className="brand" end>
          <span className="brand-mark">
            <Rocket size={18} />
          </span>
          Rick and Morty Explorer
        </NavLink>

        <SearchBar
          key={`${location.pathname}${location.search}`}
          value={searchParams.get('name') || ''}
          onSubmit={submitSearch}
          onClear={clearSearch}
          placeholder="Search characters..."
          className="header-search"
        />

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end>
            <Home size={16} />
            Home
          </NavLink>
          <NavLink to="/favorites">
            <Heart size={16} />
            Favorites
            {count > 0 ? <span className="favorite-count">{count}</span> : null}
          </NavLink>
          <NavLink to="/about">
            <Info size={16} />
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
