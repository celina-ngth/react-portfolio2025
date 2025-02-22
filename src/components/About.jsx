import Button from './ui/Button'
import celina from '../assets/celina-ngeth.jpeg'

const Hero = () => {
  return (
    <div className="bg-secondary py-4 lg:py-10">
      <div className="container flex w-full flex-col gap-4 p-4 lg:flex-row lg:gap-8">
        <div className="w-full lg:w-1/2">
          <img
            style={{
              borderRadius: '60% 40% 63% 45%',
              width: '300px',
              height: '280px',
              objectFit: 'cover',
            }}
            src={celina}
            alt=""
          />
        </div>

        <div className="flex w-full flex-col gap-4">
          <p className="text-lg">
            Mon état d’esprit : apprendre chaque jour, trouver des solutions et
            toujours m’améliorer 💪
          </p>
          <p>
            Développeuse front-end JavaScript depuis plus de 4 ans, je suis
            dotée d’une sensibilité graphique tirée de mes études de design et
            je bénéficie de 3 ans d’expériences précédentes en temps que Product
            Owner. J’accorde depuis, une attention particulière à l’expérience
            utilisateur et à la qualité des interfaces, pour créer des produits
            aussi fonctionnels que solides techniquement.
          </p>
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

export default Hero
