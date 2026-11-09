import { Link } from 'react-router-dom'
import CharacterGrid from '../components/characters/CharacterGrid'
import EmptyState from '../components/common/EmptyState'
import { useFavorites } from '../hooks/useFavorites'

export default function Favorites() {
  const { favorites } = useFavorites()

  return (
    <div className="favorites-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Saved collection</p>
          <h1>Favorite Characters</h1>
        </div>
        <div className="count-badge">{favorites.length} saved</div>
      </div>

      {favorites.length === 0 ? (
        <EmptyState
          title="No favorites yet"
          message="Bookmark your favorite characters from the Explorer and they will appear here."
          actionLabel="Return to explorer"
          onAction={() => window.location.assign('/')}
        />
      ) : (
        <>
          <CharacterGrid characters={favorites} />
          <div className="favorites-actions">
            <Link to="/" className="primary-button">Continue exploring</Link>
          </div>
        </>
      )}
    </div>
  )
}
