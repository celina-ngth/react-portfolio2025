import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ProjectCard = ({ project }) => {
  const [imageSrc, setImageSrc] = useState(null)

  useEffect(() => {
    if (project.image) {
      import(/* @vite-ignore */ `../assets/portfolio/${project.image}`).then(
        (image) => {
          setImageSrc(image.default)
        },
      )
    }
  }, [project.image])

  return (
    <>
      {project && (
        <Link
          to={project.link}
          className={`${project.size === 'small' ? 'md:col-span-1 md:row-span-1' : 'md:col-span-2 md:row-span-2'} `}
        >
          <div className="bg-secondary group flex h-full flex-col rounded-xl">
            <div className="bg-neutral-light flex-grow overflow-hidden rounded-t-xl">
              <img
                className="h-full scale-101 rounded-t-xl object-cover opacity-90 duration-200 ease-in-out hover:translate-0 hover:scale-102 hover:opacity-99"
                src={imageSrc}
                alt=""
              />
            </div>

            <div className="flex h-min flex-col gap-2 p-3">
              <h5 className="text-md">
                <span className="group-hover:text-dark font-semibold">
                  {project.title}
                </span>
                {project.company && ` | ${project.company}`}
              </h5>
              <p>{project.description}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}

export default ProjectCard
