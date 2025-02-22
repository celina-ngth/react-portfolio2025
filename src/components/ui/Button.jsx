import { Link as ReactLink } from 'react-router-dom'
import { MoveRight } from 'lucide-react'

const Button = ({ to, title, style }) => {
  return (
    <ReactLink to={to}>
      <button
        className={`group flex w-fit cursor-pointer items-center gap-3 rounded-lg border px-4 py-2 ${
          style === 'reversed'
            ? 'bg-dark text-light border-light'
            : style === 'transparent'
              ? 'text-dark border-dark bg-transparent'
              : 'bg-light text-dark border-dark'
        }`}
      >
        {title}
        <MoveRight
          className={`group-hover:animate-fade-right h-3 w-3 ${
            style === 'reversed' ? 'text-light' : 'text-dark'
          }`}
        />
      </button>
    </ReactLink>
  )
}

export default Button
