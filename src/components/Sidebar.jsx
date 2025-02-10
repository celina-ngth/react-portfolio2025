import { Link, Mail, MapPin } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="bg-secondary top-4 mb-4 flex h-fit w-full items-center gap-4 rounded-xl p-3 lg:sticky lg:flex-col lg:p-4">
      <img
        src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png?scale-down-to=500"
        alt="Célina Ngeth"
        className="w-full rounded-md object-cover"
      />

      <div>
        <h2 className="pb-2 text-left text-lg">Célina Ngeth</h2>
        <p className="pb-4 text-left">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        <div className="flex flex-col gap-3 pl-0 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3" />
            <p>Paris</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-3 w-3" />
            <p>ngeth.celina@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Link className="h-3 w-3" />
            <p>linkedin.com/in/celina-n</p>
          </div>
          <div className="flex items-center gap-2">
            <Link className="h-3 w-3" />
            <p>github.com/celina-ngth</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
