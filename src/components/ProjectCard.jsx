import { Link } from 'react-router-dom'

const ProjectCard = ({ title, description, image, size, link }) => {
  return (
    <>
      {title && description && (
        <Link to={link}>
          <div className={`bg-secondary rounded-lg`}>
            <img
              className={`rounded-t-lg ${size === 'small' ? '' : ''}`}
              src={image}
              alt=""
            />

            <div className="flex h-fit flex-col gap-2 p-3">
              <h5 className="text-md font-bold">{title}</h5>
              <p>{description}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}

export default ProjectCard
