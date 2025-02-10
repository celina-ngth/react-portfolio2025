import { MoveRight } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
      title: 'Maisons du Monde',
      description: 'Site de vente de maisons',
      size: 'large',
      image:
        'https://framerusercontent.com/images/0Mi0IWlbWJU3AYT2hGFzEwO4Ku8.png?scale-down-to=4096',
    },
    {
      title: 'Fiters',
      description: 'Site de vente de maisons',
      size: 'small',
      image:
        'https://framerusercontent.com/images/0Mi0IWlbWJU3AYT2hGFzEwO4Ku8.png?scale-down-to=4096',
    },
  ]

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects &&
          projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              size={project.size}
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

export default Projects
