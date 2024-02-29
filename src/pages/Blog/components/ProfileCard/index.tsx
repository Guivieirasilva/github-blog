/* eslint-disable camelcase */
import {
  faUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconGithub from '../../../../assets/icons/github.svg'
import { useContext } from 'react'
import { ProfileContext } from '../../../../context/ProfileContext'
import Markdown from 'react-markdown'

export function ProfileCard() {
  const { user } = useContext(ProfileContext)
  const { bio, company, followers, html_url, login, name } = user
  return (
    <section className="flex w-4/5 gap-4 rounded-lg bg-base-profile p-10 text-base-text md:w-[90%] md:flex-col md:items-center md:p-6 lg:flex-row">
      <div className="flex items-center">
        <img
          className="h-[148px] w-[148px] rounded-md"
          src="https://github.com/Guivieirasilva.png"
          alt=""
        />{' '}
      </div>
      <div className=" flex flex-1 flex-col gap-4 p-2">
        <header className="flex items-center justify-between md:flex-col md:gap-2">
          <strong className="text-2xl text-base-title md:text-center ">
            {name}
          </strong>
          <a href={html_url} className="cursor-pointer text-blue">
            GITHUB{' '}
            <FontAwesomeIcon className="ml-1" icon={faUpRightFromSquare} />
          </a>
        </header>
        <main className="flex-1">
          <Markdown>{bio}</Markdown>
        </main>
        <footer className="flex justify-between gap-4 text-center text-base-subtitle md:flex-col md:items-center">
          <div title="Github" className="flex items-center gap-2">
            <img className="inline h-6 w-6" src={IconGithub} alt="" />
            <span>{login}</span>
          </div>
          <div title="Empresa" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBuilding} />
            {company}
          </div>
          <div title="Seguidores" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUserGroup} />
            {followers} Seguidores
          </div>
        </footer>
      </div>
    </section>
  )
}
