import PageHeading from '../components/PageHeading'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS_DETAILS } from '../api/data'

const ProjectListPage = () => {
  const pro = PROJECTS_DETAILS.filter(
    (project) => project.type === 'pro',
  ).slice(0, 3)
  const other = PROJECTS_DETAILS.filter(
    (project) => project.type === 'other',
  ).slice(0, 3)

  return (
    <div className="container px-4 pt-6 lg:pt-8">
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
    </div>
  )
}

export default ProjectListPage
