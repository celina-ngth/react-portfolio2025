import { MoveRight } from 'lucide-react'

const Experiences = () => {
	const experiences = [
		{
			name: 'Maisons du Monde',
			description: 'Refonte du site e-commerce Maisons du Monde',
			dates: `2021 - aujourd'hui`,
		},
		{
			name: 'Fiters',
			description: 'Refonte du site e-commerce Maisons du Monde',
			dates: `2021 - aujourd'hui`,
		},
		{
			name: 'BNP Paribas - Product Owner',
			description: 'Refonte du site e-commerce Maisons du Monde',
			dates: `2021 - aujourd'hui`,
		},
	]

	return (
		<>
			<div className="flex flex-col gap-4">
				{experiences &&
					experiences.map((exp) => (
						<a key={exp.name} href="#">
							<div className="flex gap-2 py-3 px-2 hover:bg-secondary rounded-lg justify-between items-center group">
								<div className="flex flex-col gap-2">
									<div className="text-md font-bold px-2">{exp.name}</div>
									<div className="px-2">{exp.description}</div>
									<div className="px-2">{exp.dates}</div>
								</div>
								<MoveRight className="mr-4 group-hover:animate-fade-right" />
							</div>
						</a>
					))}
			</div>
		</>
	)
}

export default Experiences
