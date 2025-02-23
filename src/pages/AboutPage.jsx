import { PROJECTS_DETAILS, EDUCATION, TOOLS } from '../api/data'
import PageHeading from '../components/PageHeading'
import Experiences from '../components/ExperienceCard'
import AboutHero from '../components/AboutHero'
import AboutText from '../components/AboutText'
import Tool from '../components/Tool'

const AboutPage = () => {
  const LANGUAGES = ['language', 'framework', 'tool', 'state']
  const METHODOLOGY = [
    'designsystem',
    'methodology',
    'api',
    'tests',
    'design',
    'cms',
  ]

  const projects = PROJECTS_DETAILS.filter((project) => project.type === 'pro')

  const languages = TOOLS.filter((tool) => LANGUAGES.includes(tool.category))
  const methodology = TOOLS.filter((tool) =>
    METHODOLOGY.includes(tool.category),
  )

  return (
    <>
      <AboutHero />

      <AboutText />

      <div className="container flex flex-col gap-8 px-4 pt-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full">
            <PageHeading title="Expériences" />
            <div className="my-3 flex flex-col">
              {projects.map((exp) => (
                <Experiences key={exp.title} experience={exp} column />
              ))}
            </div>
          </div>

          <div className="w-full">
            <PageHeading title="Formations" />
            <div className="my-3 flex flex-col">
              {EDUCATION.map((exp) => (
                <Experiences key={exp.title} experience={exp} column />
              ))}
            </div>
          </div>
        </div>

        <div className="container px-4">
          <h1 className="pb-4 text-center text-2xl">Compétences</h1>
          <PageHeading title="Langages, frameworks et conception" center />
          <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {languages?.map((tool, index) => (
              <Tool
                key={`${tool}-${index}`}
                tool={tool.name}
                type={tool.type}
                icon={tool.icon}
              />
            ))}
          </div>
        </div>

        <div className="container px-4">
          <PageHeading title="Méthodologie, outils et autres" center />
          <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {methodology?.map((tool, index) => (
              <Tool
                key={`${tool}-${index}`}
                tool={tool.name}
                type={tool.type}
                icon={tool.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
