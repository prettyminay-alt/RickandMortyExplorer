import { Link } from 'react-router-dom'
import { ArrowUpRight, BadgeInfo } from 'lucide-react'
import FavoriteButton from './FavoriteButton'

export default function CharacterCard({ character }) {
  return (
    <article className="character-card">
      <div className="card-image-wrap">
        <img src={character.image} alt={character.name} className="card-image" />
        <span className={`status-pill ${character.status?.toLowerCase() || 'unknown'}`}>
          {character.status}
        </span>
      </div>

      <div className="card-body">
        <div className="card-header-row">
          <div>
            <h3>{character.name}</h3>
            <p>
              {character.species} • {character.gender}
            </p>
          </div>
          <FavoriteButton character={character} compact />
        </div>

        <div className="meta-grid">
          <div>
            <span className="meta-label">Origin</span>
            <strong>{character.origin?.name || 'Unknown'}</strong>
          </div>
          <div>
            <span className="meta-label">Location</span>
            <strong>{character.location?.name || 'Unknown'}</strong>
          </div>
        </div>

        <Link to={`/character/${character.id}`} className="card-link">
          <BadgeInfo size={16} />
          View profile
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  )
}
