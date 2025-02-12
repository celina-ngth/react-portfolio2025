import { useState, useEffect } from 'react'
import PageHeading from '../components/PageHeading'
import ProjectCard from '../components/ProjectCard'
import { getProjectList } from '../api/projects'

const ProjectListPage = () => {
  const [projectList, setProjectList] = useState([])
  const [otherList, setOtherList] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjectList = async () => {
      try {
        const list = await getProjectList()
        const pro = list.filter((project) => project.type === 'pro')
        const other = list.filter((project) => project.type === 'other')
        setProjectList(pro)
        setOtherList(other)
      } catch (error) {
        setError(error)
      }
    }
    fetchProjectList()
  }, [])

  if (error) {
    return <div>Error loading project list: {error.message}</div>
  }

  return (
    <>
      <div className="pb-8">
        <PageHeading title={'Projets professionnels'} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projectList &&
            projectList.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                size={project.size}
              />
            ))}
        </div>
      </div>

      <div>
        <PageHeading title={'Autres réalisations'} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {otherList &&
            otherList.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                size={project.size}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default ProjectListPage
