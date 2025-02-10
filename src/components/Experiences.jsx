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
              <div className="hover:bg-secondary group flex items-center justify-between gap-2 rounded-lg px-2 py-3">
                <div className="flex flex-col gap-2">
                  <div className="text-md px-2 font-bold">{exp.name}</div>
                  <div className="px-2">{exp.description}</div>
                  <div className="px-2">{exp.dates}</div>
                </div>
                <MoveRight className="group-hover:animate-fade-right mr-4" />
              </div>
            </a>
          ))}
      </div>
    </>
  )
}

export default Experiences
