const API_BASE = 'https://rickandmortyapi.com/api'

function normalizeFilterValue(value) {
  if (value === undefined || value === null || value === '' || value === 'all') {
    return undefined
  }

  if (typeof value === 'string') {
    return value.trim()
  }

  return value
}

function buildQueryString(params = {}) {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    const normalizedValue = normalizeFilterValue(value)

    if (normalizedValue === undefined) {
      return
    }

    searchParams.append(key, String(normalizedValue))
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
  const characterId = Number(id)

  if (!Number.isSafeInteger(characterId) || characterId < 1) {
    const error = new Error('Enter a valid positive character ID.')
    error.status = 404
    throw error
  }

  const response = await fetch(`${API_BASE}/character/${characterId}`)

  if (!response.ok) {
    const message = response.status === 404
      ? 'This character could not be found. Check the ID or return to the Explorer.'
      : `Character request failed with status ${response.status}`
    const error = new Error(message)
    error.status = response.status
    throw error
  }

  return response.json()
}

export async function getMultipleCharacters(ids = []) {
  if (!Array.isArray(ids) || ids.length === 0) {
    return []
  }

  const uniqueIds = [...new Set(ids.map(Number).filter((id) => Number.isSafeInteger(id) && id > 0))]

  if (uniqueIds.length === 0) {
    return []
  }

  const response = await fetch(`${API_BASE}/character/${uniqueIds.join(',')}`)

  if (!response.ok) {
    throw new Error(`Characters request failed with status ${response.status}`)
  }

  const data = await response.json()
  return Array.isArray(data) ? data : [data]
}

export async function getEpisodes(ids = []) {
  if (!Array.isArray(ids) || ids.length === 0) {
    return []
  }

  const uniqueIds = [...new Set(ids.map(Number).filter((id) => Number.isSafeInteger(id) && id > 0))]

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
