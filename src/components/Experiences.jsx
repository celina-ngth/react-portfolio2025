import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PROJECT_LIST } from '../api/data'

const Experiences = () => {
  const projects = PROJECT_LIST.filter((project) => project.type === 'pro')

  return (
    <>
      <div className="flex flex-col gap-4">
        {projects &&
          projects.map((exp) => (
            <div
              className="flex items-center justify-between rounded-lg px-2 py-3"
              key={exp.title}
            >
              <div className="flex flex-col gap-2">
                <div className="text-md px-2 font-bold">{exp.title}</div>
                <div className="px-2">{exp.description}</div>
                <div className="px-2">{exp.dates}</div>
              </div>
            </div>
          ))}

        <Link to="/projects">
          <div className="bg-secondary hover:bg-primary group flex items-center justify-between rounded-lg px-2 py-3">
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

export default Experiences
