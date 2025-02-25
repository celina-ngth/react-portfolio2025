import Button from './ui/Button'

const Hero = () => {
  return (
    <div className="py-8 lg:py-10">
      <div className="container flex w-full flex-col gap-6 px-4">
        <div className="w-full text-xl">
          <h1 className="font-extralight">
            — Hello, je m&apos;appelle <i>Célina</i>,
            <div className="font-medium">
              et je suis développeuse <strong>front-end JS</strong>
            </div>
            depuis plus de 4 ans
          </h1>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row">
          <Button to="/about" title="Voir mon profil complet" />
        </div>
      </div>
    </div>
  )
}

export default Hero
