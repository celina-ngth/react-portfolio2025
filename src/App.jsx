import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './layout/Layout'
import About from './pages/AboutPage'
import ProjectListPage from './pages/ProjectListPage'
import ProjectPage from './pages/ProjectPage'
import Contact from './pages/Contact'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectListPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
