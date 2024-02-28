import { useParams } from 'react-router-dom'
import { HeaderPost } from './components/HeaderPosts'
import { useContext } from 'react'
import { IssuesContext } from '../../context/IssuesContext'
import Markdown from 'react-markdown'

export function Posts() {
  const { postId } = useParams()
  console.log(postId)

  const { issues } = useContext(IssuesContext)

  const currentIssue = issues.find((data) => String(data.id) === postId)

  if (currentIssue) {
    return (
      <section className="flex w-4/5 flex-col items-center justify-center gap-10 text-base-text md:w-[90%]">
        {/* Header Post */}
        <HeaderPost
          title={currentIssue.title}
          comments={currentIssue.comments}
          createdAt={currentIssue.created_at}
          issueLink={currentIssue.html_url}
        />
        {/* Post */}
        <div className="flex flex-col gap-6 rounded-md bg-base-post p-8 text-justify text-lg">
          <Markdown>{currentIssue.body}</Markdown>
        </div>
      </section>
    )
  }
}
