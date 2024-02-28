import {
  faUpRightFromSquare,
  faChevronLeft,
  faCalendar,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import IconGithub from '../../../assets/icons/github.svg'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface HeaderPostProps {
  title: string
  createdAt: string
  comments: number
  issueLink: string
}

export function HeaderPost({
  title,
  comments,
  createdAt,
  issueLink,
}: HeaderPostProps) {
  const publishedDateFormated = format(createdAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <div className="flex w-full flex-col  gap-4 rounded-lg bg-base-profile p-10 text-base-text md:p-6">
      <div className="flex w-full items-center justify-between text-blue">
        <NavLink to="/">
          {' '}
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </NavLink>
        <a href={issueLink}>
          VER NO GITHUB <FontAwesomeIcon icon={faUpRightFromSquare} />{' '}
        </a>
      </div>

      <h1 className="mb-2 text-4xl text-base-title md:text-2xl">{title}</h1>

      <div className="flex gap-10 text-left text-base-span md:gap-5 xs:flex-col">
        <div title="Github" className="flex items-start gap-2">
          <img className="inline h-6 w-6" src={IconGithub} alt="" />
          <span>GuivieiraSilva</span>
        </div>

        <div title="Publicado há" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCalendar} />
          <time title={publishedDateFormated} dateTime={createdAt}>
            {publishedDateRelativeToNow}
          </time>
        </div>

        <div title="Comentários" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faComment} />
          <span>
            {comments === 1
              ? `${comments} Comentário`
              : comments > 1
                ? `${comments} Comentário`
                : 'Nenhum Comentário'}{' '}
          </span>
        </div>
      </div>
    </div>
  )
}
