import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHeading from '../components/PageHeading'
import { PROJECTS_DETAILS } from '../api/data'
import { MoveLeft } from 'lucide-react'
import Tool from '../components/Tool'

const ProjectPage = () => {
  const { id } = useParams()

  const project = PROJECTS_DETAILS.find((project) => project.id === id)

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
    <div className="container px-4 pt-6">
      <Link to="/projects">
        <div className="group hover:text-dark mb-3 flex items-center gap-3 rounded-lg">
          <MoveLeft className="group-hover:animate-fade-left hover:text-dark h-3 w-3" />
          Retour aux projets
        </div>
      </Link>

      {project && (
        <div className="flex flex-col gap-4">
          {imageSrc && (
            <div className="bg-neutral overflow-hidden rounded-xl">
              <img
                className="max-h-[600px] w-full rounded-xl object-cover object-top opacity-96"
                src={imageSrc}
              />
            </div>
          )}

          <PageHeading title={project.title} />

          <div className="grid items-baseline lg:grid-cols-8 lg:gap-6">
            <div className="flex flex-col lg:col-span-2 lg:gap-6">
              {project.dates && (
                <div>
                  <h4 className="text-neutral-light mb-2 text-sm font-semibold uppercase">
                    Dates
                  </h4>
                  <div className="">{project.dates}</div>
                </div>
              )}

              <div>
                <h4 className="text-neutral-light mb-3 text-sm font-semibold uppercase">
                  Stack technique et outils
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  {project.stack?.map((item) => (
                    <div key={item} className="bg-secondary rounded-lg px-2">
                      <Tool tool={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:col-span-6 lg:gap-6 lg:pl-8">
              {project.context && (
                <div>
                  <h4 className="text-neutral-light mb-2 text-sm font-semibold uppercase">
                    Contexte
                  </h4>
                  <div className="">{project.context}</div>
                </div>
              )}

              {project.description && (
                <div>
                  <h4 className="text-neutral-light mb-2 text-sm font-semibold uppercase">
                    Description
                  </h4>
                  <div className="">{project.description}</div>
                </div>
              )}

              {project.list && (
                <div>
                  <h4 className="text-neutral-light mb-2 text-sm font-semibold uppercase">
                    Missions
                  </h4>
                  <ul className="list-disc pl-3">
                    {project.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectPage
