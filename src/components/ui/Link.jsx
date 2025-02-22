import { Link as ReactLink } from 'react-router-dom'
import { MoveRight } from 'lucide-react'

const Link = ({ to, title }) => {
  return (
    <ReactLink to={to}>
      <div className="group hover:text-dark flex items-center gap-3 rounded-lg">
        {title}
        <MoveRight className="group-hover:animate-fade-right hover:text-dark h-3 w-3" />
      </div>
    </ReactLink>
  )
}

export default Link
