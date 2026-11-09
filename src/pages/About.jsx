export default function About() {
  return (
    <div className="about-page">
      <div className="section-heading">
        <p className="eyebrow">Project overview</p>
        <h1>About Rick and Morty Explorer</h1>
      </div>

      <div className="about-grid">
        <section className="card-panel">
          <h2>Purpose</h2>
          <p>
            Rick and Morty Explorer is a responsive, client-side React app designed to help users explore the universe of Rick and Morty through a professional dashboard experience.
          </p>
        </section>

        <section className="card-panel">
          <h2>API</h2>
          <p>
            The application uses the official public REST API from <a href="https://rickandmortyapi.com" target="_blank" rel="noreferrer">rickandmortyapi.com</a> to retrieve characters, filter results, and provide detailed profiles.
          </p>
        </section>

        <section className="card-panel">
          <h2>Technology stack</h2>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>React Router DOM</li>
            <li>Context API</li>
            <li>localStorage</li>
            <li>Lucide React</li>
          </ul>
        </section>

        <section className="card-panel">
          <h2>Team contributions</h2>
          <ul>
            <li>API and functional architecture</li>
            <li>Search, filters, and pagination</li>
            <li>UI/UX design and responsive layout</li>
            <li>Favorites persistence and character detail pages</li>
            <li>Project documentation and final QA</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
