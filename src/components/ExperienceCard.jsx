const Experience = ({ experience, column }) => {
  return (
    <div>
      {experience && (
        <div
          className={`mb-4 flex justify-between ${column && 'flex-col'}`}
          key={experience.title}
        >
          <h5 className="text-md font-semibold">{experience.title}</h5>
          {experience.job ||
            (experience.dates && (
              <div
                className={`flex min-w-40 flex-col ${!column && 'text-right'}`}
              >
                {experience.job && <p>{experience.job}</p>}
                {experience.dates && (
                  <p className="text-neutral-light text-sm">
                    {experience.dates}
                  </p>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default Experience
