import { useState } from 'react'

export default function SearchBar({
  value,
  onSubmit,
  onClear,
  placeholder = 'Search by name...',
  className = '',
}) {
  const [searchValue, setSearchValue] = useState(value)

  return (
    <form
      className={`search-bar ${className}`.trim()}
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(searchValue)
      }}
      role="search"
    >
      <input
        type="search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder={placeholder}
        aria-label="Search characters by name"
      />

      <button type="submit" className="primary-button">
        Search
      </button>

      {searchValue ? (
        <button
          type="button"
          className="secondary-button"
          onClick={() => {
            setSearchValue('')
            onClear()
          }}
        >
          Clear
        </button>
      ) : null}
    </form>
  )
}
