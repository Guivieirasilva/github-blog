/* eslint-disable react/no-children-prop */
import { useParams } from 'react-router-dom'
import { HeaderPost } from './components/HeaderPosts'
import { useContext } from 'react'
import { IssuesContext } from '../../context/IssuesContext'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import style from 'react-syntax-highlighter/dist/esm/styles/prism/dracula'

export function Posts() {
  const { postId } = useParams()
  const { issues } = useContext(IssuesContext)

  const currentIssue = issues.find((data) => String(data.id) === postId)

  if (currentIssue) {
    return (
      <section className="flex w-4/5 flex-col items-center justify-center gap-10 pb-32 text-base-text md:w-[90%]">
        {/* Header Post */}
        <HeaderPost
          title={currentIssue.title}
          comments={currentIssue.comments}
          createdAt={currentIssue.created_at}
          issueLink={currentIssue.html_url}
        />
        {/* Post */}
        <div className="flex flex-col gap-6 rounded-md p-8 text-justify text-lg  md:w-[90%] md:p-2">
          <Markdown
            className="md:overflow-scroll md:text-sm"
            children={currentIssue.body}
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')

                if (!match) {
                  return <code className={className} {...props} />
                }

                const meta = node?.data as string | undefined

                return (
                  <SyntaxHighlighter
                    language={match[1]}
                    wrapLines={!!meta}
                    style={style}
                    children={String(children).replace(/\s$/g, '')}
                    {...props}
                  />
                )
              },
            }}
          />
        </div>
      </section>
    )
  }
}
