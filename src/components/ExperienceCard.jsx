import Link from '../components/ui/Link'

const Experience = ({ experience, column }) => {
  return (
    <div
      className={`mb-2 flex justify-between gap-1 lg:mb-4 ${column ? 'flex-col' : ''}`}
      key={experience.title}
    >
      {experience.dates && (
        <div className="text-neutral-light py-2 text-xs">
          {experience.dates}
        </div>
      )}

      <h5 className="text-md font-semibold">{experience.title}</h5>

      {experience.company && (
        <div className={`flex min-w-40 flex-col ${column ? '' : 'text-right'}`}>
          <div>{experience.company}</div>
        </div>
      )}

      {experience.context && <p className="text-sm">{experience.context}</p>}

      {experience.link && (
        <div className="text-neutral-light text-sm">
          <Link to={experience.link} title="En savoir plus" />
        </div>
      )}
    </div>
  )
}

export default Experience
