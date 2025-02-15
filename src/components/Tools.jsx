const Tools = ({ tools }) => {
  return (
    <>
      <div className="flex flex-wrap gap-3">
        {tools &&
          tools.map((tool, index) => (
            <div
              className="bg-secondary flex flex-col items-center rounded-lg px-3 py-2 font-semibold"
              key={`${tool}-${index}`}
            >
              {tool}
            </div>
          ))}
      </div>
    </>
  )
}

export default Tools
