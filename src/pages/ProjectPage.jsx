import PageHeading from '../components/PageHeading'
import ProjectCard from '../components/ProjectCard'

const ProjectPage = () => {
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
      <div className="pb-8">
        <PageHeading title={'Projets professionnels'} />
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
        </div>
      </div>

      <div>
        <PageHeading title={'Autres réalisations'} />
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
        </div>
      </div>
    </>
  )
}

export default ProjectPage
