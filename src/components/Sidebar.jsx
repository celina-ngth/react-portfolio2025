import { Link, Mail, MapPin } from 'lucide-react'

const Sidebar = () => {
	return (
		<div className="bg-neutral text-primary rounded-xl p-5 h-fit mb-4 lg:sticky top-4 flex flex-col md:flex-row gap-4 md:items-center lg:flex-col w-full">
			<img
				src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png?scale-down-to=1024"
				alt="Célina Ngeth"
				className="rounded-md w-full"
			/>

			<div>
				<h2 className="text-lg pb-2 lg:text-center text-center md:text-left">
					Célina Ngeth
				</h2>
				<p className="pb-4 lg:text-center text-center md:text-left">
					A Software Engineer who has developed countless innovative solutions.
				</p>

				<div className="flex flex-col gap-2 text-sm pl-3 md:pl-0">
					<div className="flex gap-2 items-center">
						<MapPin />
						<p>Paris</p>
					</div>
					<div className="flex gap-2 items-center">
						<Mail />
						<p>ngeth.celina@gmail.com</p>
					</div>
					<div className="flex gap-2 items-center">
						<Link />
						<p>linkedin.com/in/celina-n</p>
					</div>
					<div className="flex gap-2 items-center">
						<Link />
						<p>github.com/celina-ngth</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
