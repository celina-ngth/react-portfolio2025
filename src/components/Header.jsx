import { Link } from 'react-router-dom'
import CV from '../assets/cv_celina-ngeth.pdf'
import { Download } from 'lucide-react'

const Header = () => {
  return (
    <header className="border-neutral-light w-full border-b py-4">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to={'/'}>
          <h1 className="text-xl">Célina —</h1>
        </Link>

        <div className="flex flex-col gap-2 text-sm md:flex-row md:gap-4">
          <Link to={'/projects'}>
            <div className="group hover:text-dark underline-offset-2 transition duration-200 ease-in-out hover:underline">
              Projets
            </div>
          </Link>
          <Link to={'/about'}>
            <div className="group hover:text-dark underline-offset-2 transition duration-200 ease-in-out hover:underline">
              Profil
            </div>
          </Link>
          <a href={CV} target="_blank">
            <div className="group hover:text-dark flex items-center gap-2 underline-offset-2 transition duration-200 ease-in-out hover:underline">
              CV <Download className="h-3 w-3" />
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
