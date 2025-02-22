import { PROJECTS_DETAILS, EDUCATION, TOOLS } from '../api/data'
import PageHeading from '../components/PageHeading'
import Experiences from '../components/ExperienceCard'
import AboutHero from '../components/AboutHero'
import AboutText from '../components/AboutText'
import Tool from '../components/Tool'

const AboutPage = () => {
  const projects = PROJECTS_DETAILS.filter((project) => project.type === 'pro')

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
          <PageHeading
            title="Compétences"
            description="Langages, frameworks, méthodo, outils et autres"
          />
          <div className="flex flex-wrap items-center gap-3">
            {TOOLS?.map((tool, index) => (
              <Tool key={`${tool}-${index}`} tool={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
