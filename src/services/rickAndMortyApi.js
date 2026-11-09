const API_BASE = 'https://rickandmortyapi.com/api'

function buildQueryString(params = {}) {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '' || value === 'all') {
      return
    }

    searchParams.append(key, String(value))
  })

  const queryString = searchParams.toString()
  return queryString ? `?${queryString}` : ''
}

export async function getCharacters(params = {}) {
  const queryString = buildQueryString(params)
  const response = await fetch(`${API_BASE}/character/${queryString}`)

  if (!response.ok) {
    if (response.status === 404) {
      return { info: null, results: [] }
    }

    throw new Error(`Characters request failed with status ${response.status}`)
  }

  return response.json()
}

export async function getCharacterById(id) {
  const response = await fetch(`${API_BASE}/character/${id}`)

  if (!response.ok) {
    throw new Error(`Character request failed with status ${response.status}`)
  }

  return response.json()
}

export async function getMultipleCharacters(ids = []) {
  if (!Array.isArray(ids) || ids.length === 0) {
    return []
  }

  const uniqueIds = [...new Set(ids.filter(Boolean).map(Number))]

  if (uniqueIds.length === 0) {
    return []
  }

  const results = await Promise.all(
    uniqueIds.map(async (id) => {
      try {
        return await getCharacterById(id)
      } catch {
        return null
      }
    }),
  )

  return results.filter(Boolean)
}

export async function getEpisodes(ids = []) {
  if (!Array.isArray(ids) || ids.length === 0) {
    return []
  }

  const uniqueIds = [...new Set(ids.filter(Boolean).map(Number))]

  if (uniqueIds.length === 0) {
    return []
  }

  const response = await fetch(`${API_BASE}/episode/${uniqueIds.join(',')}`)

  if (!response.ok) {
    throw new Error(`Episodes request failed with status ${response.status}`)
  }

  const data = await response.json()
  return Array.isArray(data) ? data : [data]
}
