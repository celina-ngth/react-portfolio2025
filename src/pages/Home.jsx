import PageHeading from '../components/PageHeading'
import Tool from '../components/Tool'
import Experiences from '../components/ExperienceCard'
import ProjectCard from '../components/ProjectCard'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TOOLS, PROJECT_LIST } from '../api/data'

const Home = () => {
  const experiences = PROJECT_LIST.filter((project) => project.type === 'pro')
  const projects = PROJECT_LIST.filter((project) => project.type === 'other')

  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <PageHeading
          title="Software engineer"
          description="Développeuse front-end JavaScript depuis plus de 4 ans, je suis dotée d’une sensibilité graphique tirée de mes études de design et je bénéficie de 3 ans d’expériences précédentes en temps que Product Owner. J’accorde depuis, une attention particulière à l’expérience utilisateur et à la qualité des interfaces, pour créer des produits aussi fonctionnels que solides techniquement.
          Mon état d’esprit : apprendre chaque jour, trouver des solutions et toujours m’améliorer 💪"
        />
        <section className="flex gap-4">
          <div>
            <p className="text-lg font-bold">4 ans</p>
            <p>d&apos;expérience front-end</p>
          </div>
          <div>
            <p className="text-lg font-bold">3 ans</p>
            <p>de product ownership</p>
          </div>
        </section>
      </div>

      <div>
        <PageHeading title="+4 ans d'expériences" />
        {experiences?.map((exp) => (
          <Experiences key={exp.title} experience={exp} />
        ))}
        <Link to="/experiences">
          <div className="bg-secondary hover:bg-primary group flex items-center justify-between rounded-lg px-2 py-3">
            <div className="flex flex-col gap-2">
              <div className="text-md px-2 font-bold">
                Voir les expériences et formations
              </div>
            </div>
            <MoveRight className="group-hover:animate-fade-right mr-4" />
          </div>
        </Link>
      </div>

      <div>
        <PageHeading title="Compétences" />
        <div className="flex flex-wrap gap-3">
          {TOOLS?.map((tool, index) => (
            <Tool key={`${tool}-${index}`} tool={tool} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <PageHeading title="Réalisations" />
          <div className="grid gap-4 md:grid-flow-col md:grid-rows-2">
            {projects?.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <Link to="/projects">
          <div className="bg-secondary hover:bg-primary group flex items-center justify-between gap-2 rounded-lg px-2 py-3">
            <div className="flex flex-col gap-2">
              <div className="text-md px-2 font-bold">
                Voir tous les projets
              </div>
            </div>
            <MoveRight className="group-hover:animate-fade-right mr-4" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
