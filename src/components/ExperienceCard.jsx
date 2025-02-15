const Experience = ({ experience }) => {
  return (
    <div>
      {experience && (
        <div className="mb-4 flex justify-between" key={experience.title}>
          <h5 className="text-md font-semibold">{experience.title}</h5>
          <div className="flex min-w-40 flex-col text-right">
            <p>{experience.job}</p>
            <p>{experience.dates}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Experience
