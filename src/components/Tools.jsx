const Tools = () => {
  const tools = [
    {
      name: 'React',
    },
    {
      name: 'Vue 3 Composition API',
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'NextJS',
    },
    {
      name: 'TailwindCSS',
    },
    {
      name: 'Figma',
    },
  ]

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {tools &&
          tools.map((tool, index) => (
            <div
              className="bg-secondary flex flex-col items-center rounded-lg px-3 py-2 font-semibold"
              key={`${tool.name}-${index}`}
            >
              {tool.name}
            </div>
          ))}
      </div>
    </>
  )
}

export default Tools
