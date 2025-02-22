import Header from '../components/Header'
import React from 'react'
const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="mx-auto mb-10 min-h-screen">
        <div className="col-span-2 w-full">{children}</div>
      </main>

      <footer className="border-neutral-light mt-10 border-t py-4">
        <div className="text-neutral-light container flex justify-center px-4">
          made with ❤️
        </div>
      </footer>
    </>
  )
}

export default Layout
