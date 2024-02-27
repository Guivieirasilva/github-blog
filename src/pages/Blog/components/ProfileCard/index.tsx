import {
  faUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconGithub from '../../../../assets/icons/github.svg'

export function ProfileCard() {
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
            Guilherme Vieira Silva
          </strong>
          <a className="cursor-pointer text-blue">
            GITHUB{' '}
            <FontAwesomeIcon className="ml-1" icon={faUpRightFromSquare} />
          </a>
        </header>
        <main>
          <p className="md:text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            nesciunt cumque tempora animi deleniti exercitationem est, aliquam
            aut iusto ab, nostrum minus sit, architecto ipsa necessitatibus
            perferendis eaque sequi cum.
          </p>
        </main>
        <footer className="flex justify-between gap-4 text-center text-base-subtitle md:flex-col md:items-center">
          <div title="Github" className="flex items-center gap-2">
            <img className="inline h-6 w-6" src={IconGithub} alt="" />
            <span>GuivieiraSilva</span>
          </div>
          <div title="Empresa" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBuilding} />
            UpBase Consulthing
          </div>
          <div title="Seguidores" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUserGroup} />
            32 Seguidores
          </div>
        </footer>
      </div>
    </section>
  )
}
