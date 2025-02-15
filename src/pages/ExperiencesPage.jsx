import { PROJECTS_DETAILS, EDUCATION, FORMATIONS } from '../api/data'

import PageHeading from '../components/PageHeading'

const ExperiencesPage = () => {
  return (
    <>
      <div>
        <PageHeading title="Expériences" />
        {PROJECTS_DETAILS &&
          PROJECTS_DETAILS.map((exp) => <div key={exp.title}>{exp.title}</div>)}
      </div>
      <div>
        <PageHeading title="Formations" />
        {EDUCATION &&
          EDUCATION.map((exp) => <div key={exp.title}>{exp.title}</div>)}
      </div>
      <div>
        <PageHeading title="Formations professionnelles" />
        {FORMATIONS &&
          FORMATIONS.map((exp) => <div key={exp.title}>{exp.title}</div>)}
      </div>
    </>
  )
}

export default ExperiencesPage
