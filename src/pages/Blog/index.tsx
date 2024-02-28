import { useContext } from 'react'
import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { IssuesContext } from '../../context/IssuesContext'

export function Blog() {
  const { issues } = useContext(IssuesContext)
  const amountIssues =
    issues.length === 1
      ? `${issues.length} Publicação`
      : `${issues.length} publicações`

  return (
    <div className="flex flex-col items-center justify-center gap-16 pb-40 text-base-text ">
      <ProfileCard />
      <div className="flex w-4/5 flex-col items-center justify-center gap-2 md:w-[90%]">
        <div className="flex w-full justify-between px-1">
          <span className="text-lg text-base-subtitle ">Publicações</span>
          <span className="text-sm text-base-span ">
            {issues.length >= 1 && amountIssues}
          </span>
        </div>

        <input
          className="h-12 w-full rounded-md border border-base-border bg-base-input p-4 text-base-text placeholder:text-base-label "
          type="search"
          placeholder="Buscar Conteúdo"
        />
      </div>

      <section className=" grid w-4/5 grid-cols-2 gap-8 md:w-[90%] md:grid-cols-1">
        {issues.map((data) => (
          <PostCard
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.body}
            createdAt={data.created_at}
          />
        ))}
      </section>
    </div>
  )
}
