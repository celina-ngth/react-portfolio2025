import { Link, useParams } from 'react-router-dom'
import PageHeading from '../components/PageHeading'
import { PROJECTS_DETAILS } from '../api/data'
import { MoveLeft } from 'lucide-react'
import Tool from '../components/Tool'

const ProjectPage = () => {
  const { id } = useParams()

  const project = PROJECTS_DETAILS.find((project) => project.id === id)

  return (
    <>
      <Link to="/projects">
        <div className="group hover:text-dark mb-3 flex items-center gap-3 rounded-lg">
          <MoveLeft className="group-hover:animate-fade-left hover:text-dark h-3 w-3" />
          Retour aux projets
        </div>
      </Link>

      {project && (
        <div className="flex flex-col gap-4">
          <img className="w-full rounded-xl" src={project.image} />
          <PageHeading title={project.title} />

          {project.dates && <p>{project.dates}</p>}

          {project.context && <p>{project.context}</p>}
          {project.description && <p>{project.description}</p>}

          {project.list && (
            <ul className="list-disc pl-3">
              {project.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap items-center gap-3">
            {project.stack.map((item) => (
              <Tool key={item} tool={item} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectPage
