import PageHeading from '../components/PageHeading'
import Tool from '../components/Tool'
import About from '../components/About'
import ProjectCard from '../components/ProjectCard'
import Hero from '../components/Hero'
import Link from '../components/ui/Link'
import { TOOLS, PROJECTS_DETAILS } from '../api/data'

const Home = () => {
  const projects = PROJECTS_DETAILS.filter((project) => project.type === 'pro')

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

        <About />

        <div className="container px-4">
          <PageHeading title="Compétences" />
          <div className="flex flex-wrap items-center gap-3">
            {TOOLS?.map((tool, index) => (
              <Tool key={`${tool}-${index}`} tool={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
