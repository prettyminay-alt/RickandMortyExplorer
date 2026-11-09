import { useCallback, useEffect, useMemo, useState } from 'react'
import { FavoritesContext } from './favoritesContext'

const STORAGE_KEY = 'rick-and-morty-favorites'

function readFavorites() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    const parsed = stored ? JSON.parse(stored) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(readFavorites)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = useCallback((character) => {
    if (!character || !character.id) {
      return
    }

    setFavorites((current) => {
      const exists = current.some((item) => item.id === character.id)

      if (exists) {
        return current.filter((item) => item.id !== character.id)
      }

      return [
        {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          image: character.image,
          origin: character.origin,
          location: character.location,
        },
        ...current,
      ]
    })
  }, [])

  const isFavorite = useCallback((id) => favorites.some((item) => item.id === id), [favorites])

  const value = useMemo(
    () => ({
      favorites,
      count: favorites.length,
      toggleFavorite,
      isFavorite,
    }),
    [favorites, toggleFavorite, isFavorite],
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
