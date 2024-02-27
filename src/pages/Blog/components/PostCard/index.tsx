import { useNavigate } from 'react-router-dom'

export function PostCard() {
  const nagivate = useNavigate()
  return (
    <div
      onClick={() => nagivate('posts/2')}
      className="cursor-pointer rounded-[10px] bg-base-post p-10"
    >
      <header className="mb-4 flex items-center justify-between gap-1">
        <strong className="text-xl text-base-title">
          JavaScript data types and data structures
        </strong>
        <span className="text-sm  text-base-span">Há 1 dia</span>
      </header>
      <article>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad beatae
        voluptas earum alias exercitationem libero facilis porro sed officiis
        recusandae soluta inventore incidunt, natus laudantium perspiciatis
        repellat vitae facere odio!
      </article>
    </div>
  )
}
