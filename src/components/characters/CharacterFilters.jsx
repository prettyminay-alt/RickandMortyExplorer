const statusOptions = ['all', 'Alive', 'Dead', 'Unknown']
const speciesOptions = ['all', 'Human', 'Alien', 'Humanoid', 'Robot', 'Mythological Creature', 'Cronenberg', 'Disease', 'Poopybutthole', 'Animal', 'unknown']
const genderOptions = ['all', 'Male', 'Female', 'Genderless', 'Unknown']

export default function CharacterFilters({ status, species, gender, sortBy, onStatusChange, onSpeciesChange, onGenderChange, onSortChange }) {
  return (
    <div className="filters-panel">
      <div className="filter-group">
        <label htmlFor="status-filter">Status</label>
        <select id="status-filter" value={status} onChange={(event) => onStatusChange(event.target.value)}>
          {statusOptions.map((option) => (
            <option key={option} value={option === 'all' ? 'all' : option}>
              {option === 'all' ? 'All status' : option}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="species-filter">Species</label>
        <select id="species-filter" value={species} onChange={(event) => onSpeciesChange(event.target.value)}>
          {speciesOptions.map((option) => (
            <option key={option} value={option === 'all' ? 'all' : option}>
              {option === 'all' ? 'All species' : option}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="gender-filter">Gender</label>
        <select id="gender-filter" value={gender} onChange={(event) => onGenderChange(event.target.value)}>
          {genderOptions.map((option) => (
            <option key={option} value={option === 'all' ? 'all' : option}>
              {option === 'all' ? 'All genders' : option}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="sort-filter">Sort by</label>
        <select id="sort-filter" value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
          <option value="id-asc">ID: Lowest to Highest</option>
          <option value="id-desc">ID: Highest to Lowest</option>
          <option value="name-asc">Name: A–Z</option>
          <option value="name-desc">Name: Z–A</option>
        </select>
      </div>
    </div>
  )
}
