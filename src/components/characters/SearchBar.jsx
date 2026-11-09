export default function SearchBar({ value, onChange, onSubmit, onClear, placeholder = 'Search by name...' }) {
  const submit = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSubmit()
    }
  }

  return (
    <div className="search-bar">
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={submit}
        placeholder={placeholder}
        aria-label="Search characters"
      />

      <button type="button" className="primary-button" onClick={onSubmit}>
        Search
      </button>

      {value ? (
        <button type="button" className="secondary-button" onClick={onClear}>
          Clear
        </button>
      ) : null}
    </div>
  )
}
