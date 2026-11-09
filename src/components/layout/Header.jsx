import { Heart, Home, Info, Rocket } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useFavorites } from '../../hooks/useFavorites'

export default function Header() {
  const { count } = useFavorites()

  return (
    <header className="topbar">
      <div className="container nav-shell">
        <NavLink to="/" className="brand" end>
          <span className="brand-mark">
            <Rocket size={18} />
          </span>
          Rick and Morty Explorer
        </NavLink>

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
