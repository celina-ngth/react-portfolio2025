import PageHeading from '../components/PageHeading'
import Tool from '../components/Tool'
import AboutHome from '../components/AboutHome'
import ProjectCard from '../components/ProjectCard'
import Hero from '../components/Hero'
import Link from '../components/ui/Link'
import Button from '../components/ui/Button'
import { TOOLS, PROJECTS_DETAILS } from '../api/data'
import { Fade } from 'react-awesome-reveal'

const Home = () => {
  const projects = PROJECTS_DETAILS.filter(
    (project) => project.type === 'pro',
  ).slice(0, 3)

  return (
    <>
      <Fade>
        <Hero />
      </Fade>

      <div className="flex w-full flex-col gap-8">
        <Fade>
          <div className="container px-4">
            <Fade cascade>
              <PageHeading title="Dernières expériences" />
              <div className="mb-4 grid gap-4 md:grid-flow-col md:grid-rows-2">
                {projects?.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </Fade>
            <Link to="/projects" title="Tous les projets" />
          </div>
        </Fade>

        <Fade>
          <AboutHome />
        </Fade>

        <Fade>
          <div className="container px-4">
            <PageHeading
              title="Compétences"
              description="Langages, frameworks, méthodo, outils et autres"
              center
            />
            <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {TOOLS?.slice(0, 11).map((tool, index) => (
                <Tool
                  key={`${tool}-${index}`}
                  tool={tool.name}
                  type={tool.type}
                  icon={tool.icon}
                />
              ))}
            </div>
            <div className="flex justify-center py-3">
              <Button to="/about" title="Toutes les compétences" />
            </div>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default Home
