import { useParams } from 'react-router-dom'
import PageHeading from '../components/PageHeading'
import { PROJECTS_DETAILS } from '../api/data'

const ProjectPage = () => {
  const { id } = useParams()

  const project = PROJECTS_DETAILS.find((project) => project.id === id)

  return (
    <>
      {project && (
        <div className="flex flex-col gap-4">
          <img className="w-full rounded-xl" src={project.image} />
          <PageHeading title={project.title} />
          <p>{project.context}</p>
          <p>{project.description}</p>
          {project.list && (
            <ul className="list-disc pl-3">
              {project.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  )
}

export default ProjectPage
