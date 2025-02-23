import { Link } from 'react-router-dom'
import PageHeading from './PageHeading'
import CV from '../assets/cv_celina-ngeth.pdf'
import { Download } from 'lucide-react'

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
            <Link to={'/contact'}>
              <div>Contact</div>
            </Link>
            <a href={CV} target="_blank">
              <div className="flex items-center gap-2">
                CV <Download className="h-3 w-3" />
              </div>
            </a>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="mt-4 mb-2 font-semibold uppercase">Liens</h4>
            <Link to={'/projects'}>
              <div>LinkedIn</div>
            </Link>
            <Link to={'/about'}>
              <div>Github</div>
            </Link>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="mt-4 mb-2 font-semibold uppercase">Mail</h4>
            <Link to={'/projects'}>
              <div>ngeth.celina@gmail.com</div>
            </Link>

            <h4 className="mt-4 mb-2 font-semibold uppercase">Localisation</h4>
            <Link to={'/projects'}>
              <div>Paris, France</div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
