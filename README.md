# Rick and Morty Explorer

## Project Overview
Rick and Morty Explorer is a responsive React single-page application that lets users browse, search, filter, and favorite characters from the official Rick and Morty public REST API. The app is designed with a dark sci-fi dashboard aesthetic and includes a dedicated character detail experience and persistent favorites system.

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
- Favorites tracking with localStorage persistence
- Responsive layout for desktop, tablet, and mobile devices

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
- API & Functional Development: Data fetching, search, filters, pagination, error handling
- UI & Application Design: Layout, responsive styling, character cards, favorites, details page, documentation

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
