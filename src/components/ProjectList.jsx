import { MoveRight } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'
import { PROJECT_LIST } from '../api/data'

const ProjectList = () => {
  const projects = PROJECT_LIST.filter((project) => project.type === 'other')

  return (
    <>
      <div className="flex gap-4">
        {projects &&
          projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              size={project.size}
              link={project.link}
            />
          ))}

        <Link to="/projects">
          <div className="bg-secondary hover:bg-primary group flex items-center justify-between gap-2 rounded-lg px-2 py-3">
            <div className="flex flex-col gap-2">
              <div className="text-md px-2 font-bold">
                Voir tous les projets
              </div>
            </div>
            <MoveRight className="group-hover:animate-fade-right mr-4" />
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProjectList
