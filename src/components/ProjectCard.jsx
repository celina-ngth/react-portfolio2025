import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  return (
    <>
      {project && (
        <Link to={project.link}>
          <div className={`bg-secondary rounded-lg`}>
            <img
              className={`rounded-t-lg ${project.size === 'small' ? '' : ''}`}
              src={project.image}
              alt=""
            />

            <div className="flex h-fit flex-col gap-2 p-3">
              <h5 className="text-md font-bold">{project.title}</h5>
              <p>{project.description}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}

export default ProjectCard
