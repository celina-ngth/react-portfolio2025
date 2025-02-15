import PageHeading from '../components/PageHeading'
import ProjectCard from '../components/ProjectCard'
import { PROJECT_LIST } from '../api/data'

const ProjectListPage = () => {
  const pro = PROJECT_LIST.filter((project) => project.type === 'pro')
  const other = PROJECT_LIST.filter((project) => project.type === 'other')

  return (
    <>
      <div className="pb-8">
        <PageHeading title={'Projets professionnels'} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {pro &&
            pro.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </div>
      </div>

      <div>
        <PageHeading title={'Autres réalisations'} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {other &&
            other.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </div>
      </div>
    </>
  )
}

export default ProjectListPage
