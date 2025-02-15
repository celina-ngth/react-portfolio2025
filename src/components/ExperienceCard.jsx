const Experience = ({ experience }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {experience && (
          <div
            className="flex items-center justify-between rounded-lg px-2 py-3"
            key={experience.title}
          >
            <div className="flex flex-col gap-2">
              <div className="text-md px-2 font-bold">{experience.title}</div>
              <div className="px-2">{experience.description}</div>
              <div className="px-2">{experience.dates}</div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Experience
