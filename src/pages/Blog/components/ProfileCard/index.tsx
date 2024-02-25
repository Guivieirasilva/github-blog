import {
  faUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconGithub from '../../../../assets/icons/github.svg'

export function ProfileCard() {
  return (
    <section className="w-4/5 md:w-[90%] flex lg:flex-row md:flex-col md:items-center gap-4 p-10 md:p-6 bg-base-profile rounded-lg text-base-text">
      <div className="flex items-center">
        <img
          className="w-[148px] h-[148px] rounded-md"
          src="https://github.com/Guivieirasilva.png"
          alt=""
        />{' '}
      </div>
      <div className=" flex flex-col gap-4 flex-1 p-2">
        <header className="flex md:flex-col md:gap-2 justify-between items-center">
          <strong className="text-base-title text-2xl md:text-center ">
            Guilherme Vieira Silva
          </strong>
          <a className="text-blue cursor-pointer">
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
        <footer className="flex md:flex-col md:items-center gap-4 justify-between text-base-subtitle text-center">
          <div title="Github" className="flex gap-2 items-center">
            <img className="h-6 w-6 inline" src={IconGithub} alt="" />
            <span>GuivieiraSilva</span>
          </div>
          <div title="Empresa" className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faBuilding} />
            UpBase Consulthing
          </div>
          <div title="Seguidores" className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faUserGroup} />
            32 Seguidores
          </div>
        </footer>
      </div>
    </section>
  )
}
