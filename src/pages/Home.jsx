import PageHeading from '../components/PageHeading'
import ProjectList from '../components/ProjectList'
import Tools from '../components/Tools'
import Experiences from '../components/Experiences'

const Home = () => {
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
        <PageHeading title="Projets récents" />
        <ProjectList />
      </div>

      <div>
        <PageHeading title="Compétences" />
        <Tools />
      </div>

      <div>
        <PageHeading title="+4 ans d'expériences" />
        <Experiences />
      </div>
    </div>
  )
}

export default Home
