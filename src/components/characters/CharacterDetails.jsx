import { ArrowLeft, CalendarRange, Heart, MapPin, ShieldCheck, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import FavoriteButton from './FavoriteButton'

export default function CharacterDetails({ character, episodes = [] }) {
  if (!character) {
    return null
  }

  return (
    <div className="details-layout">
      <div className="details-hero card-panel">
        <img src={character.image} alt={character.name} className="details-image" />

        <div className="details-copy">
          <div className="details-header-row">
            <div>
              <p className="eyebrow">Character profile</p>
              <h1>{character.name}</h1>
            </div>
            <FavoriteButton character={character} />
          </div>

          <div className="details-stats">
            <div>
              <span>ID</span>
              <strong>#{character.id}</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>{character.status}</strong>
            </div>
            <div>
              <span>Species</span>
              <strong>{character.species}</strong>
            </div>
            <div>
              <span>Gender</span>
              <strong>{character.gender}</strong>
            </div>
          </div>

          <div className="details-meta">
            <div><UserRound size={16} /><span>Origin:</span> {character.origin?.name || 'Unknown'}</div>
            <div><MapPin size={16} /><span>Current location:</span> {character.location?.name || 'Unknown'}</div>
            <div><CalendarRange size={16} /><span>Episodes:</span> {episodes.length}</div>
            <div><ShieldCheck size={16} /><span>Species tag:</span> {character.species}</div>
          </div>

          <div className="detail-actions">
            <Link to="/" className="secondary-button back-link">
              <ArrowLeft size={16} />
              Back to Explorer
            </Link>
          </div>
        </div>
      </div>

      <div className="card-panel episodes-panel">
        <div className="panel-title-row">
          <h2>Episodes</h2>
          <span className="chip">
            <Heart size={14} />
            {episodes.length} total
          </span>
        </div>

        <div className="episode-list">
          {episodes.length ? (
            episodes.map((episode) => (
              <div key={episode.id} className="episode-item">
                <strong>{episode.episode}</strong>
                <span>{episode.name}</span>
                <small>{episode.air_date}</small>
              </div>
            ))
          ) : (
            <p className="muted-text">No episode information available.</p>
          )}
        </div>
      </div>
    </div>
  )
}
