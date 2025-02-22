import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="border-neutral-light w-full border-b py-4">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to={'/'}>
          <h1 className="text-xl">Célina —</h1>
        </Link>

        <div className="flex flex-col gap-2 text-sm md:flex-row md:gap-4">
          <Link to={'/projects'}>
            <div>Projets</div>
          </Link>
          <Link to={'/about'}>
            <div>Profil</div>
          </Link>
          <Link to={'/contact'}>
            <div>Contact</div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
