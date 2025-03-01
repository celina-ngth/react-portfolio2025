import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ProjectCard = ({ project, small }) => {
  const [imageSrcs, setImageSrcs] = useState({})

  useEffect(() => {
    const loadImageSrcs = async () => {
      if (project.images) {
        const imageSrcs = await Promise.all(
          project.images?.map(async (imageName) => {
            const image = await import(`../assets/projects/${imageName}.webp`)
            return image.default
          }),
        )
        setImageSrcs((prevImageSrcs) => ({ ...prevImageSrcs, ...imageSrcs }))
      }
    }
    loadImageSrcs()
  }, [project.images])

  return (
    <>
      {project && (
        <Link
          to={project.link}
          className={`${small || project.size === 'small' ? 'md:col-span-1 md:row-span-1' : 'md:col-span-2 md:row-span-2'} `}
        >
          <div className="bg-primary group flex h-full flex-col rounded-xl">
            {imageSrcs && (
              <div
                className={`bg-neutral-light flex-grow overflow-hidden rounded-t-xl ${small || project.size === 'small' ? 'max-h-[200px]' : ''}`}
              >
                <img
                  className="h-full w-full scale-101 rounded-t-xl object-cover object-top opacity-90 duration-200 ease-in-out hover:translate-0 hover:scale-102 hover:opacity-99"
                  src={imageSrcs[0]}
                  alt=""
                />
              </div>
            )}

            <div className="flex h-min flex-col gap-2 p-3">
              <h5 className="text-md">
                <span className="group-hover:text-dark font-semibold">
                  {project.title}
                </span>
                {project.company && ` | ${project.company}`}
              </h5>
              <p>{project.context}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}

export default ProjectCard
