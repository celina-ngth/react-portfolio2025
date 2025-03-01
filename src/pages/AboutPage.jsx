import { PROJECTS_DETAILS, EDUCATION, TOOLS } from '../api/data'
import PageHeading from '../components/PageHeading'
import Experiences from '../components/ExperienceCard'
import AboutHero from '../components/AboutHero'
import AboutText from '../components/AboutText'
import Tool from '../components/Tool'
import { Fade } from 'react-awesome-reveal'

const AboutPage = () => {
  const LANGUAGES = ['language', 'framework', 'tool', 'tests', 'state', 'api']
  const METHODOLOGY = ['designsystem', 'methodology', 'design', 'cms']

  const projects = PROJECTS_DETAILS.filter((project) => project.type === 'pro')

  const languages = TOOLS.filter((tool) => LANGUAGES.includes(tool.category))
  const methodology = TOOLS.filter((tool) =>
    METHODOLOGY.includes(tool.category),
  )

  return (
    <>
      <Fade>
        <AboutHero />
      </Fade>

      <Fade>
        <AboutText />
      </Fade>

      <div className="container flex flex-col gap-8 px-4 pt-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full">
            <Fade>
              <PageHeading title="Expériences" />
              <div className="flex flex-col gap-4">
                {projects.map((exp) => (
                  <Fade cascade key={exp.title}>
                    <Experiences experience={exp} column />
                  </Fade>
                ))}
              </div>
            </Fade>
          </div>

          <div className="w-full">
            <Fade>
              <PageHeading title="Formations" />
              <div className="flex flex-col gap-2">
                {EDUCATION.map((exp) => (
                  <Fade cascade key={exp.title}>
                    <Experiences experience={exp} column />
                  </Fade>
                ))}
              </div>
            </Fade>
          </div>
        </div>

        <div className="container px-4">
          <Fade>
            <h1 className="pb-4 text-center text-2xl">Compétences</h1>
            <PageHeading title="Langages, frameworks et conception" center />
            <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {languages?.map((tool, index) => (
                <Fade key={`${tool}-${index}`}>
                  <Tool tool={tool.name} type={tool.type} icon={tool.icon} />
                </Fade>
              ))}
            </div>
          </Fade>
        </div>

        <div className="container px-4">
          <Fade>
            <PageHeading title="Méthodologie, outils et autres" center />
            <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {methodology?.map((tool, index) => (
                <Fade key={`${tool}-${index}`}>
                  <Tool tool={tool.name} type={tool.type} icon={tool.icon} />
                </Fade>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default AboutPage
