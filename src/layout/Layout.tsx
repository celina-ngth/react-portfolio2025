import Header from '../components/Header'
import React from 'react'
import Sidebar from '../components/Sidebar'

const Layout = ({ children }) => {
	return (
		<>
			<Header />

			<main className="min-h-screen container mx-auto px-4 py-4">
				<div className="lg:flex gap-8 lg:py-4 grid lg:grid-cols-3 ">
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
