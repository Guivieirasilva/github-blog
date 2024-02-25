import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'

export function Blog() {
  const POSTS = [1, 2, 3, 4, 5, 6]
  return (
    <div className="flex flex-col gap-16 pb-40 items-center justify-center text-base-text ">
      <ProfileCard />
      <div className="w-4/5 md:w-[90%] flex flex-col items-center justify-center gap-2">
        <div className="w-full flex justify-between px-1">
          <span className="text-base-subtitle text-lg ">Publicações</span>
          <span className="text-base-span text-sm ">9 Publicações</span>
        </div>
        <input
          className="w-full h-12 p-4 bg-base-input rounded-md text-base-text border border-base-border placeholder:text-base-label "
          type="search"
          placeholder="Buscar Conteúdo"
        />
      </div>
      <section className=" w-4/5 md:w-[90%] grid grid-cols-2 md:grid-cols-1 gap-8">
        {POSTS.map((data, idx) => (
          <PostCard key={idx} />
        ))}
      </section>
    </div>
  )
}
