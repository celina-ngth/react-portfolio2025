import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHeading from '../components/PageHeading'
import { PROJECTS_DETAILS } from '../api/data'
import { MoveLeft, SquareArrowOutUpRight } from 'lucide-react'
import Tool from '../components/Tool'
import ProjectCard from '../components/ProjectCard'

const ProjectPage = () => {
  const { id } = useParams()

  const project = PROJECTS_DETAILS.find((project) => project.id === id)
  const nextProjectIndex = PROJECTS_DETAILS.indexOf(project) + 1
  const nextProject = PROJECTS_DETAILS.filter((project) =>
    Boolean(project.link),
  )[nextProjectIndex]

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
    <div className="container px-4 pt-6">
      <Link to="/projects">
        <div className="group hover:text-dark mb-3 flex items-center gap-3 rounded-lg">
          <MoveLeft className="group-hover:animate-fade-left hover:text-dark h-3 w-3" />
          Retour aux projets
        </div>
      </Link>

      {project && (
        <div className="flex flex-col gap-4">
          {project.images[0] && (
            <div className="bg-neutral overflow-hidden rounded-xl">
              <img
                className="max-h-[600px] w-full rounded-xl object-cover object-top opacity-96"
                src={imageSrcs[0]}
              />
            </div>
          )}

          <div className="pt-3 text-center lg:py-6">
            {project.company && (
              <h3 className="text-neutral-light text-lg md:pb-3">
                {project.company}
              </h3>
            )}
            <PageHeading title={project.title} center />
          </div>

          <div className="grid items-baseline gap-6 lg:grid-cols-8">
            <div className="flex flex-col gap-6 lg:col-span-2">
              {project.dates && (
                <div>
                  <h4 className="text-neutral-light mb-2 text-sm font-semibold uppercase">
                    Dates
                  </h4>
                  <div>{project.dates}</div>
                </div>
              )}

              {project.externalLink.link && (
                <div>
                  <h4 className="text-neutral-light mb-2 text-sm font-semibold uppercase">
                    Lien externe
                  </h4>
                  <Link to={project.externalLink.link} target="_blank">
                    <div className="flex items-center gap-2">
                      {project.externalLink.cta}
                      <SquareArrowOutUpRight className="h-3 w-3" />
                    </div>
                  </Link>
                </div>
              )}

              <div>
                {project.stack?.length > 0 && (
                  <>
                    <h4 className="text-neutral-light mb-3 text-sm font-semibold uppercase">
                      Stack technique et outils
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.stack.map((item, index) => (
                        <div
                          key={`${item}-${index}`}
                          className="bg-primary rounded-lg px-2 text-sm"
                        >
                          <Tool tool={item} />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-6 lg:pl-6 xl:pl-10">
              {project.context && (
                <div>
                  <h4 className="text-neutral-light mb-2 text-sm font-semibold uppercase">
                    Contexte
                  </h4>
                  <div>{project.context}</div>
                </div>
              )}
              {project.description && (
                <div>
                  <h4 className="text-neutral-light mb-2 text-sm font-semibold uppercase">
                    Description
                  </h4>
                  <div>{project.description}</div>
                </div>
              )}
              {project.list?.length > 0 && (
                <div>
                  <h4 className="text-neutral-light mb-2 text-sm font-semibold uppercase">
                    Missions
                  </h4>
                  <ul className="list-disc pl-3">
                    {project.list.map((item, index) => (
                      <li
                        key={`${item}-${index}`}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                </div>
              )}
              {project.images?.length > 1 && (
                <div className="grid gap-3 md:grid-cols-2">
                  {project.images.slice(1).map((imageName, index) => (
                    <img
                      key={`${imageName}-${index}`}
                      className="w-full rounded-xl"
                      src={imageSrcs[index + 1]}
                    />
                  ))}
                </div>
              )}
              {nextProject && (
                <div className="mt-6 w-1/2">
                  <PageHeading title="Autre projet" />
                  <ProjectCard project={nextProject} small />
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
