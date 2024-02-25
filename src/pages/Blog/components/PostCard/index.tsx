import { useNavigate } from 'react-router-dom'

export function PostCard() {
  const nagivate = useNavigate()
  return (
    <div
      onClick={() => nagivate('posts/2')}
      className="bg-base-post rounded-[10px] p-10 cursor-pointer"
    >
      <header className="flex gap-1 mb-4 items-center justify-between">
        <strong className="text-base-title text-xl">
          JavaScript data types and data structures
        </strong>
        <span className="text-base-span  text-sm">Há 1 dia</span>
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
