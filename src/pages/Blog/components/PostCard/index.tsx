import { useNavigate } from 'react-router-dom'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostCardProps {
  id: string
  title: string
  description: string
  createdAt: string
}

export function PostCard({ id, title, description, createdAt }: PostCardProps) {
  const nagivate = useNavigate()

  const publishedDateFormated = format(createdAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const shortDescription = description.substring(0, 250).concat('...')

  return (
    <div
      onClick={() => nagivate(`posts/${id}`)}
      className="cursor-pointer rounded-[10px] bg-base-post p-10"
    >
      <header className="mb-4 flex items-center justify-between gap-1">
        <strong className="text-xl text-base-title">{title}</strong>
        <time
          title={publishedDateFormated}
          dateTime={createdAt}
          className="text-sm  text-base-span"
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <article>{shortDescription}</article>
    </div>
  )
}
