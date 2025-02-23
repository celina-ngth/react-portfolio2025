import PageHeading from '../components/PageHeading'
import Tool from '../components/Tool'
import AboutHome from '../components/AboutHome'
import ProjectCard from '../components/ProjectCard'
import Hero from '../components/Hero'
import Link from '../components/ui/Link'
import { TOOLS, PROJECTS_DETAILS } from '../api/data'

const Home = () => {
  const projects = PROJECTS_DETAILS.filter(
    (project) => project.type === 'pro',
  ).slice(0, 3)

  return (
    <>
      <Hero />

      <div className="flex w-full flex-col gap-8">
        <div className="container px-4">
          <PageHeading title="Dernières expériences" />
          <div className="mb-4 grid gap-4 md:grid-flow-col md:grid-rows-2">
            {projects?.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <Link to="/projects" title="Tous les projets" />
        </div>

        <AboutHome />

        <div className="container px-4">
          <PageHeading
            title="Compétences"
            description="Langages, frameworks, méthodo, outils et autres"
          />
          <div className="mb-4 grid grid-cols-4">
            {TOOLS?.slice(0, 11).map((tool, index) => (
              <Tool
                key={`${tool}-${index}`}
                tool={tool.name}
                type={tool.type}
                icon={tool.icon}
              />
            ))}
          </div>
          <Link to="/about" title="Toutes les compétences" />
        </div>
      </div>
    </>
  )
}

export default Home
