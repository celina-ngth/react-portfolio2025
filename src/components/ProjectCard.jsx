import { Link } from 'react-router-dom'

const ProjectCard = ({ title, description, image, size }) => {
  return (
    <>
      {title && description && (
        <Link to="/">
          <div
            className={`bg-secondary rounded-lg ${
              size === 'small' ? 'col-span-1' : 'md:col-span-2'
            }`}
          >
            <img
              className={`rounded-t-lg ${
                size === 'small'
                  ? 'object-cover md:aspect-square'
                  : 'w-full object-cover md:max-h-[184px]'
              }`}
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
