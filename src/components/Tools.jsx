const Tools = () => {
  const tools = [
    {
      name: 'React',
      logo: 'https://framerusercontent.com/images/0Mi0IWlbWJU3AYT2hGFzEwO4Ku8.png?scale-down-to=4096',
    },
    {
      name: 'Vue 3',
      description: 'Composition API',
      logo: 'https://framerusercontent.com/images/0Mi0IWlbWJU3AYT2hGFzEwO4Ku8.png?scale-down-to=4096',
    },
    {
      name: 'TypeScript',
      logo: 'https://framerusercontent.com/images/0Mi0IWlbWJU3AYT2hGFzEwO4Ku8.png?scale-down-to=4096',
    },
    {
      name: 'JavaScript',
      logo: 'https://framerusercontent.com/images/0Mi0IWlbWJU3AYT2hGFzEwO4Ku8.png?scale-down-to=4096',
    },
    {
      name: 'NextJS',
      logo: 'https://framerusercontent.com/images/0Mi0IWlbWJU3AYT2hGFzEwO4Ku8.png?scale-down-to=4096',
    },
    {
      name: 'TailwindCSS',
      logo: 'https://framerusercontent.com/images/0Mi0IWlbWJU3AYT2hGFzEwO4Ku8.png?scale-down-to=4096',
    },
    {
      name: 'Figma',
      logo: 'https://framerusercontent.com/images/0Mi0IWlbWJU3AYT2hGFzEwO4Ku8.png?scale-down-to=4096',
    },
  ]

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {tools &&
          tools.map((tool, index) => (
            <div
              className="bg-secondary flex w-full items-center rounded-lg"
              key={`${tool.name}-${index}`}
            >
              <img
                className="m-2 aspect-square max-h-[50px] rounded-lg object-cover"
                src={tool.logo}
                alt=""
              />
              <div>
                <div className="px-2 font-semibold">{tool.name}</div>
                {tool.description && (
                  <div className="px-2 text-xs">{tool.description}</div>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Tools
