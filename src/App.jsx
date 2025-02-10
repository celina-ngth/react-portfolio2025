import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './layout/Layout'
import ExperiencesPage from './pages/ExperiencesPage'
import ProjectPage from './pages/ProjectPage'
import Contact from './pages/Contact'

function App() {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<ProjectPage />} />
						<Route path="/experiences" element={<ExperiencesPage />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>{' '}
				</Layout>
			</BrowserRouter>
		</>
	)
}

export default App
