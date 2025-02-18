import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="w-full border-b pb-4">
      <div className="container mx-auto flex h-16 items-center justify-between lg:px-4">
        <Link to={'/'}>
          <h1 className="text-xl tracking-tight">Célina</h1>
        </Link>

        <div className="flex flex-col gap-2 text-sm md:flex-row md:gap-4">
          <Link to={'/projects'}>
            <div>Projets</div>
          </Link>
          <Link to={'/experiences'}>
            <div>Expériences et formations</div>
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
