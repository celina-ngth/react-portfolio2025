import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  return (
    <>
      {project && (
        <Link
          to={project.link}
          className={`${project.size === 'small' ? 'md:col-span-1 md:row-span-1' : 'md:col-span-2 md:row-span-2'} `}
        >
          <div className="bg-secondary flex h-full flex-col rounded-lg">
            <div className="flex-grow rounded-t-lg">
              <img
                className="h-full rounded-t-lg object-cover"
                src={project.image}
                alt=""
              />
            </div>

            <div className="flex h-min flex-col gap-2 p-3">
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
