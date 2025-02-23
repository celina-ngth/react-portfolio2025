import Button from './ui/Button'
import PageHeading from './PageHeading'
import { Link } from 'react-router-dom'

const AboutText = () => {
  return (
    <div className="bg-secondary py-4 lg:py-8">
      <div className="container grid grid-cols-3 gap-4 p-4 lg:flex-row lg:gap-8">
        <div className="col-span-1">
          <PageHeading title="À propos" />

          <Link to={'/contact'}>
            <div>Contact</div>
          </Link>

          <Link to={'/contact'}>
            <div>CV</div>
          </Link>
        </div>

        <div className="col-span-2 flex w-full flex-col gap-4">
          <p className="text-lg">
            Mon état d’esprit : apprendre chaque jour, trouver des solutions et
            toujours m’améliorer 💪
          </p>

          <div className="flex gap-6">
            <p className="w-full">
              Développeuse front-end JavaScript depuis plus de 4 ans, je suis
              dotée d’une sensibilité graphique tirée de mes études de design et
              je bénéficie de 3 ans d’expériences précédentes en temps que
              Product Owner.
            </p>
            <p className="w-full">
              J’accorde depuis, une attention particulière à l’expérience
              utilisateur et à la qualité des interfaces, pour créer des
              produits aussi fonctionnels que solides techniquement.
            </p>
          </div>

          <Button
            to="/about"
            title="Voir mon profil complet"
            style="transparent"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutText
