function escapeXml(value) {
  return value.replace(/[<>&'"]/g, (character) => {
    const entities = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      "'": '&apos;',
      '"': '&quot;',
    }

    return entities[character]
  })
}

function createFallbackImage(name) {
  const initials = escapeXml(
    name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0] || '')
      .join('')
      .toUpperCase() || '?',
  )

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 324"><rect width="300" height="324" fill="#18212d"/><circle cx="150" cy="142" r="68" fill="#97ce4c" fill-opacity=".16"/><text x="150" y="164" fill="#97ce4c" font-family="sans-serif" font-size="54" font-weight="700" text-anchor="middle">${initials}</text><text x="150" y="270" fill="#94a3b8" font-family="sans-serif" font-size="15" text-anchor="middle">Image unavailable</text></svg>`

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export default function CharacterImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(event) => {
        const image = event.currentTarget

        if (image.dataset.fallback !== 'true') {
          image.dataset.fallback = 'true'
          image.src = createFallbackImage(alt)
        }
      }}
    />
  )
}
