import PageHeading from '../components/PageHeading'
import ProjectCard from '../components/ProjectCard'
import { PROJECT_LIST } from '../api/data'

const ProjectListPage = () => {
  const pro = PROJECT_LIST.filter((project) => project.type === 'pro')
  const other = PROJECT_LIST.filter((project) => project.type === 'other')

  return (
    <>
      <div className="pb-8">
        <PageHeading title="Projets professionnels" />
        <div className="grid gap-4 md:grid-flow-col md:grid-rows-2">
          {pro?.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      <div>
        <PageHeading title="Autres réalisations" />
        <div className="grid gap-4 md:grid-flow-col md:grid-rows-2">
          {other?.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectListPage
