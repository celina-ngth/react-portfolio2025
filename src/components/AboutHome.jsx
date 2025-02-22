import Button from './ui/Button'
import celina from '../assets/celina-ngeth.jpeg'

const AboutHome = () => {
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
          <p className="text-xl">
            J&apos;aime apprendre, trouver des solutions aux problèmes et je
            suis toujours dans l&apos;optique de m’améliorer 💪
          </p>
          <Button
            to="/about"
            title="Consulter mon profil"
            style="transparent"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutHome
