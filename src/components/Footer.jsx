import { Link } from 'react-router-dom'
import PageHeading from './PageHeading'
import CV from '../assets/cv_celina-ngeth.pdf'
import { Download } from 'lucide-react'
import { SquareArrowOutUpRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral py-6 text-white lg:py-8">
      <div className="container flex flex-col justify-between px-4 lg:flex-row">
        <PageHeading title="Restons en contact" />

        <div className="flex flex-col gap-2 text-sm md:flex-row md:gap-7">
          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="mt-4 mb-2 font-semibold uppercase">Plan du site</h4>
            <Link to={'/projects'}>
              <div>Projets</div>
            </Link>
            <Link to={'/about'}>
              <div>Profil</div>
            </Link>
            <a href={CV} target="_blank">
              <div className="flex items-center gap-2">
                CV <Download className="h-3 w-3" />
              </div>
            </a>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="mt-4 mb-2 font-semibold uppercase">Liens</h4>
            <Link to="https://www.linkedin.com/in/celina-n/">
              <div className="flex items-center gap-2">
                LinkedIn <SquareArrowOutUpRight className="h-3 w-3" />
              </div>
            </Link>
            <Link to="https://github.com/celina-ngth/">
              <div className="flex items-center gap-2">
                Github <SquareArrowOutUpRight className="h-3 w-3" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="mt-4 mb-2 font-semibold uppercase">Mail</h4>
            <a href="mailto:ngeth.celina@gmail.com">
              <div>ngeth.celina@gmail.com</div>
            </a>

            <h4 className="mt-4 mb-2 font-semibold uppercase">Localisation</h4>
            <div>Paris, France</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
