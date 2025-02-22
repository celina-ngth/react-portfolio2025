import { PROJECTS_DETAILS, EDUCATION, FORMATIONS } from '../api/data'
import PageHeading from '../components/PageHeading'
import Experiences from '../components/ExperienceCard'
import About from '../components/About'

const AboutPage = () => {
  const projects = PROJECTS_DETAILS.filter((project) => project.type === 'pro')

  return (
    <>
      <About />

      <div className="container flex flex-col gap-8 px-4 pt-8">
        <div>
          <PageHeading title="Expériences" />
          <div className="my-3 flex flex-col gap-4 divide-y divide-gray-200">
            {projects.map((exp) => (
              <Experiences key={exp.title} experience={exp} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div>
            <PageHeading title="Formations" />
            <div className="flex flex-col gap-4">
              {EDUCATION.map((exp) => (
                <Experiences key={exp.title} experience={exp} column />
              ))}
            </div>
          </div>
          <div>
            <PageHeading title="Formations professionnelles" />
            <div className="flex flex-col gap-4">
              {FORMATIONS.map((exp) => (
                <Experiences key={exp.title} experience={exp} column />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
