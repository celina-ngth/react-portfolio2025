const Experience = ({ experience }) => {
  return (
    <div>
      {experience && (
        <div className="mb-4 flex justify-between" key={experience.title}>
          <div className="text-lg">{experience.title}</div>
          <div className="flex flex-col gap-2 text-right">
            <div>{experience.job}</div>
            <div>{experience.dates}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Experience
