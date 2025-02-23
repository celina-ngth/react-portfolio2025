import { FaVuejs, FaReact, FaGitAlt, FaFigma } from 'react-icons/fa'
import {
  SiTypescript,
  SiVitest,
  SiStorybook,
  SiNuxtdotjs,
  SiPrismic,
} from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { MdOutlineDesignServices } from 'react-icons/md'
import { GrGraphQl } from 'react-icons/gr'

const iconMap = {
  vuejs: FaVuejs,
  react: FaReact,
  typescript: SiTypescript,
  javascript: IoLogoJavascript,
  nextjs: RiNextjsLine,
  tailwindcss: RiTailwindCssFill,
  designsystem: MdOutlineDesignServices,
  vitest: SiVitest,
  graphql: GrGraphQl,
  storybook: SiStorybook,
  nuxt: SiNuxtdotjs,
  git: FaGitAlt,
  prismic: SiPrismic,
  figma: FaFigma,
}

const Tool = ({ tool, type, icon }) => {
  const IconComponent = iconMap[icon?.toLowerCase()]

  return (
    <>
      {tool && (
        <div className="flex h-full items-center gap-3 p-2">
          {icon && (
            <div className="">
              <IconComponent className="h-6 w-6" />
            </div>
          )}

          <div className={`${icon || type ? 'pt-2' : ''}`}>
            {tool}
            {type && <p className="text-neutral-light text-xs">{type}</p>}
          </div>
        </div>
      )}
    </>
  )
}

export default Tool
