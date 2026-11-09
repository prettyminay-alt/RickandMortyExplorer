import { Heart, HeartOff } from 'lucide-react'
import { useFavorites } from '../../hooks/useFavorites'

export default function FavoriteButton({ character, compact = false }) {
  const { toggleFavorite, isFavorite } = useFavorites()
  const saved = isFavorite(character.id)

  return (
    <button
      type="button"
      className={`favorite-button ${saved ? 'active' : ''} ${compact ? 'compact' : ''}`}
      onClick={() => toggleFavorite(character)}
      aria-label={saved ? `Remove ${character.name} from favorites` : `Save ${character.name} to favorites`}
    >
      {saved ? <HeartOff size={18} /> : <Heart size={18} />}
      <span>{saved ? 'Saved' : 'Save'}</span>
    </button>
  )
}
