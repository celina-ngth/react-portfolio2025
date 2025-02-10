import Header from '../components/Header'
import React from 'react'
import Sidebar from '../components/Sidebar'

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="container mx-auto min-h-screen px-4 py-4">
        <div className="grid gap-8 lg:flex lg:grid-cols-3 lg:py-4">
          <div className="col-span-1">
            <Sidebar />
          </div>

          <div className="col-span-2 w-full">{children}</div>
        </div>
      </main>

      <footer className="border-t backdrop-blur">
        <div className="container mx-auto flex justify-center pt-4 text-gray-400">
          made with ❤️
        </div>
      </footer>
    </>
  )
}

export default Layout
