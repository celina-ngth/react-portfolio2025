import { Link as ReactLink } from 'react-router-dom'
import { MoveRight } from 'lucide-react'

const Link = ({ to, title }) => {
  return (
    <ReactLink to={to}>
      <div className="group hover:text-dark flex items-center gap-2 rounded-lg">
        {title}
        <MoveRight className="hover:text-dark h-3 w-3 duration-200 ease-in-out group-hover:translate-x-2" />
      </div>
    </ReactLink>
  )
}

export default Link
