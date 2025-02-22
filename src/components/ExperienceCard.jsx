import Link from '../components/ui/Link'

const Experience = ({ experience, column }) => {
  return (
    <div
      className={`mb-4 flex justify-between ${column ? 'flex-col' : ''}`}
      key={experience.title}
    >
      {experience.dates && (
        <p className="text-neutral-light py-2 text-xs">{experience.dates}</p>
      )}

      <h5 className="text-md font-semibold">{experience.title}</h5>

      {experience.company && (
        <div className={`flex min-w-40 flex-col ${column ? '' : 'text-right'}`}>
          <p>{experience.company}</p>
        </div>
      )}

      {experience.context && <p className="text-sm">{experience.context}</p>}

      {experience.link && <Link to={experience.link} title="En savoir plus" />}
    </div>
  )
}

export default Experience
