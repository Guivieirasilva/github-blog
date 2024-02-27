import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'

export function Blog() {
  const POSTS = [1, 2, 3, 4, 5, 6]

  return (
    <div className="flex flex-col items-center justify-center gap-16 pb-40 text-base-text ">
      <ProfileCard />
      <div className="flex w-4/5 flex-col items-center justify-center gap-2 md:w-[90%]">
        <div className="flex w-full justify-between px-1">
          <span className="text-lg text-base-subtitle ">Publicações</span>
          <span className="text-sm text-base-span ">9 Publicações</span>
        </div>
        <input
          className="h-12 w-full rounded-md border border-base-border bg-base-input p-4 text-base-text placeholder:text-base-label "
          type="search"
          placeholder="Buscar Conteúdo"
        />
      </div>
      <section className=" grid w-4/5 grid-cols-2 gap-8 md:w-[90%] md:grid-cols-1">
        {POSTS.map((data, idx) => (
          <PostCard key={idx} />
        ))}
      </section>
    </div>
  )
}
