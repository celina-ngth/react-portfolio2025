import { PROJECTS_DETAILS, EDUCATION, FORMATIONS } from '../api/data'
import PageHeading from '../components/PageHeading'
import Experiences from '../components/ExperienceCard'

const ExperiencesPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <PageHeading title="Expériences" />
        <div className="flex flex-col gap-4 divide-y divide-gray-200">
          {PROJECTS_DETAILS.map((exp) => (
            <Experiences key={exp.title} experience={exp} />
          ))}
        </div>
      </div>
      <div>
        <PageHeading title="Formations" />
        <div className="flex flex-col gap-4 divide-y divide-gray-200">
          {EDUCATION.map((exp) => (
            <Experiences key={exp.title} experience={exp} />
          ))}
        </div>
      </div>
      <div>
        <PageHeading title="Formations professionnelles" />
        <div className="flex flex-col gap-4 divide-y divide-gray-200">
          {FORMATIONS.map((exp) => (
            <Experiences key={exp.title} experience={exp} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperiencesPage
