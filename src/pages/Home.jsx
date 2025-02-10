import PageHeading from '../components/PageHeading'
import Projects from '../components/Projects'
import Tools from '../components/Tools'
import Experiences from '../components/Experiences'

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <PageHeading
          title="Software engineer"
          description="Passionate about creating intuitive and engaging user experiences.
							Specialize in transforming ideas into beautifully crafted
							products."
        />
        <section className="flex gap-4">
          <div>
            <p className="text-lg font-bold">4 ans</p>
            <p>expérience front-end</p>
          </div>
          <div>
            <p className="text-lg font-bold">2</p>
            <p>projets</p>
          </div>
        </section>
      </div>

      <div>
        <PageHeading title="Projets récents" />
        <Projects />
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
