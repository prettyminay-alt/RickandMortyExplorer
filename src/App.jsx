import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import About from './pages/About'
import CharacterPage from './pages/CharacterPage'
import Favorites from './pages/Favorites'
import Home from './pages/Home'

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<CharacterPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </FavoritesProvider>
  )
}

export default App
