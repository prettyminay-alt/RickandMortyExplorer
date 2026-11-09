import { useState } from 'react'
import { Search, X } from 'lucide-react'

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
      <label className="search-input-wrap">
        <Search size={18} aria-hidden="true" />
        <input
          type="search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder={placeholder}
          aria-label="Search characters by name"
        />
      </label>

      <button type="submit" className="primary-button">
        <Search size={16} aria-hidden="true" />
        <span>Search</span>
      </button>

      {searchValue ? (
        <button
          type="button"
          className="search-clear-button"
          aria-label="Clear search"
          title="Clear search"
          onClick={() => {
            setSearchValue('')
            onClear()
          }}
        >
          <X size={17} aria-hidden="true" />
        </button>
      ) : null}
    </form>
  )
}
