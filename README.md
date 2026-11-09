# Rick and Morty Explorer

## Project Overview
Rick and Morty Explorer is a responsive React single-page application that lets users browse, search, filter, and favorite characters from the official Rick and Morty public REST API. The app is designed with a dark sci-fi dashboard aesthetic and includes a dedicated character detail experience and persistent favorites system. The complete catalog is browsable through API pagination; the app fetches one page at a time instead of loading the entire dataset into the browser.

## Objectives
- Explore the Rick and Morty universe through a clean, interactive dashboard
- Integrate and consume real API data using async JavaScript and fetch
- Implement search, filtering, sorting, and pagination
- Create reusable React components and a maintainable project structure
- Persist favorites with localStorage and route-based navigation

## Main Features
- Live character search by name
- Combined status, species, and gender filters
- Client-side sorting on the current page of results
- API-based pagination controls
- Character detail page with episode metadata
- Character and episode source API records linked from the detail view
- Favorites tracking with localStorage persistence
- Responsive layout for desktop, tablet, and mobile devices
- Loading, retryable error, and empty-result states

## Technologies Used
- React
- Vite
- JavaScript ES6+
- React Router DOM
- Context API
- localStorage
- Lucide React
- CSS3

## External API
- Official API: https://rickandmortyapi.com/api
- Documentation: https://rickandmortyapi.com/documentation
- Characters: `GET /character`
- Character details: `GET /character/{id}`
- Episodes: `GET /episode/{id}` (multiple episode IDs are fetched together)

## Application Screenshots
The Explorer, character profile, and favorites views are available in the running application. Add captured screenshots to this section when preparing the final repository presentation.

## Functional Requirements
- **API data:** Character and episode data are retrieved from the public Rick and Morty API with `fetch` and `async`/`await`.
- **Reusable components:** Shared layout, search, filters, cards, favorites controls, loading, error, empty-state, and pagination components are in `src/components/`.
- **Routing:** React Router provides `/`, `/character/:id`, `/favorites`, and `/about`.
- **Interactive features:** Search, combined filters, sorting, API pagination, and persistent favorites are implemented.
- **States and errors:** Loading, API error with retry, invalid detail IDs, and empty search/favorites states are handled.

## Folder Structure
```text
src/
├── components/
│   ├── characters/
│   ├── common/
│   └── layout/
├── context/
├── hooks/
├── pages/
├── services/
├── App.css
├── App.jsx
├── index.css
├── main.jsx
└── assets/
```

## Installation
```bash
npm install
```

## Development
```bash
npm run dev
```

## Production Build
```bash
npm run build
```

## Team Members and Contributions
- Member 1 — [add team member name]: API data fetching, search, filters, pagination, and error handling
- Member 2 — [add team member name]: UI, responsive layout, character cards/details, favorites, and documentation

Replace the member-name placeholders with the actual team members before submission. Do not claim contributions that were not made by the named members.

## Git Branching Strategy
The project follows a feature-branch workflow:
- feature/project-setup
- feature/api-integration
- feature/character-search
- feature/character-filters
- feature/pagination
- feature/favorites
- feature/character-details
- feature/ui-design
- feature/documentation

## Pull Request Workflow
1. Create a feature branch from main
2. Commit work using descriptive messages
3. Push the branch to GitHub
4. Open a pull request
5. Review and resolve conflicts before merging
6. Keep main stable and functional

## GitHub Setup
The public project repository is [RickandMortyExplorer](https://github.com/prettyminay-alt/RickandMortyExplorer). The repository name shown in the first reference screenshot (`RickandMortyApi`) is different and returns 404; use the `RickandMortyExplorer` URL. Work on feature branches and submit pull requests into `main`; do not commit directly to `main`.

To push a feature branch:
```bash
git checkout -b feature/your-feature
git add .
git commit -m "feat: describe the change"
git push -u origin feature/your-feature
```
Then open a pull request from that branch into `main` on GitHub and merge it after review.

## Example Git Commands
```bash
git checkout -b feature/api-integration
git add .
git commit -m "feat: integrate Rick and Morty API"
git push origin feature/api-integration
```

## Future Improvements
- Add episode detail pages
- Add character compare tools
- Add more advanced filter combinations
- Add dark/light theme toggle
- Improve accessibility with keyboard navigation enhancements
