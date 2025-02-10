import { Link, Mail, MapPin } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="bg-neutral text-primary top-4 mb-4 flex h-fit w-full flex-col gap-4 rounded-xl p-5 md:flex-row md:items-center lg:sticky lg:flex-col">
      <img
        src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png?scale-down-to=1024"
        alt="Célina Ngeth"
        className="w-full rounded-md"
      />

      <div>
        <h2 className="pb-2 text-center text-lg md:text-left lg:text-center">
          Célina Ngeth
        </h2>
        <p className="pb-4 text-center md:text-left lg:text-center">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        <div className="flex flex-col gap-2 pl-3 text-sm md:pl-0">
          <div className="flex items-center gap-2">
            <MapPin />
            <p>Paris</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail />
            <p>ngeth.celina@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Link />
            <p>linkedin.com/in/celina-n</p>
          </div>
          <div className="flex items-center gap-2">
            <Link />
            <p>github.com/celina-ngth</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
