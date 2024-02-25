import {
  faUpRightFromSquare,
  faChevronLeft,
  faCalendar,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import IconGithub from '../../../assets/icons/github.svg'

export function HeaderPost() {
  return (
    <div className="w-full flex flex-col  gap-4 p-10 md:p-6 bg-base-profile rounded-lg text-base-text">
      <div className="flex w-full justify-between items-center text-blue">
        <NavLink to="/">
          {' '}
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </NavLink>
        <a href="https://github.com/Guivieirasilva">
          VER NO GITHUB <FontAwesomeIcon icon={faUpRightFromSquare} />{' '}
        </a>
      </div>
      <h1 className="text-base-title text-4xl md:text-2xl mb-2">
        JavaScript data types and data structures
      </h1>
      <div className="flex gap-10 md:gap-5 text-base-span text-left xs:flex-col">
        <div title="Github" className="flex gap-2 items-start">
          <img className="h-6 w-6 inline" src={IconGithub} alt="" />
          <span>GuivieiraSilva</span>
        </div>
        <div title="Publicado há" className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faCalendar} />
          <span>Há 1 dia</span>
        </div>
        <div title="Comentários" className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faComment} />
          <span>8 Comentários</span>
        </div>
      </div>
    </div>
  )
}
