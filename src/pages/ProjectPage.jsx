import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PageHeading from '../components/PageHeading'
import { getProject } from '../api/projects'

const ProjectPage = () => {
  const { id } = useParams()

  const [project, setProject] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const project = await getProject(id)
        setProject(project)
      } catch (error) {
        setError(error)
      }
    }
    fetchProject()
  }, [])

  if (error) {
    return <div>Error loading project list: {error.message}</div>
  }

  return (
    <>
      {project && (
        <div className="flex flex-col gap-4">
          <img className="w-full rounded-xl" src={project.image} />
          <PageHeading title={project.title} />
          <p>{project.context}</p>
          <p>{project.description}</p>
          {project.list && (
            <ul>
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
