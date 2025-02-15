import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="w-full border-b pb-4">
      <div className="container mx-auto flex h-16 items-center justify-between lg:px-4">
        <Link to={'/'}>
          <div className="text-xl font-bold tracking-tight">Célina Ngeth.</div>
        </Link>

        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <Link to={'/projects'}>
            <div className="text-sm font-semibold tracking-tight">projets</div>
          </Link>
          <Link to={'/experiences'}>
            <div className="text-sm font-semibold tracking-tight">
              expériences et formations
            </div>
          </Link>
          <Link to={'/contact'}>
            <div className="text-sm font-semibold tracking-tight">contact</div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
