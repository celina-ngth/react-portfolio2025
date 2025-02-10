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
			<div className="gap-4 md:grid-cols-2 grid">
				{tools &&
					tools.map((tool, index) => (
						<div
							className=" bg-secondary rounded-lg flex items-center w-full"
							key={`${tool.name}-${index}`}
						>
							<img
								className="rounded-lg aspect-square object-cover max-h-[50px] m-2"
								src={tool.logo}
								alt=""
							/>
							<div>
								<div className=" font-semibold px-2">{tool.name}</div>
								{tool.description && (
									<div className="text-xs px-2">{tool.description}</div>
								)}
							</div>
						</div>
					))}
			</div>
		</>
	)
}

export default Tools
