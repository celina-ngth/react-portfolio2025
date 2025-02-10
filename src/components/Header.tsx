import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="w-full border-b pb-4">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={'/'}>
          <div className="text-xl font-bold tracking-tight">Célina Ngeth.</div>
        </Link>

        <div className="flex flex-col gap-4 md:flex-row">
          <Link to={'/projects'}>
            <div className="text-sm font-semibold tracking-tight">projets</div>
          </Link>
          <Link to={'/experiences'}>
            <div className="text-sm font-semibold tracking-tight">
              expériences
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
