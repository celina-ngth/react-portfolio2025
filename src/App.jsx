import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './layout/Layout'
import ExperiencesPage from './pages/ExperiencesPage'
import ProjectListPage from './pages/ProjectListPage'
import ProjectPage from './pages/ProjectPage'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectListPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
