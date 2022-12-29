import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Ariticle from './pages/Ariticle'
import ArticlesList from './pages/ArticlesList'
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <Navbar />
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/articles-list' element={<ArticlesList />} />
        <Route path='/article' element={<Ariticle />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App