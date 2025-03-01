import PageHeading from '../components/PageHeading'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS_DETAILS } from '../api/data'
import { Fade } from 'react-awesome-reveal'

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
        <Fade>
          <PageHeading title="Projets professionnels" />
          <Fade cascade>
            <div className="grid gap-4 md:grid-flow-col md:grid-rows-2">
              {pro?.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Fade>
        </Fade>
      </div>

      <div>
        <Fade>
          <PageHeading title="Autres réalisations" />
          <Fade cascade>
            <div className="grid gap-4 md:grid-flow-col md:grid-rows-2">
              {other?.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Fade>
        </Fade>
      </div>
    </div>
  )
}

export default ProjectListPage
