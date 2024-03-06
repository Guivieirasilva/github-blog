import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../../lib/axios'

interface IssuesType {
  id: string
  title: string
  body: string
  created_at: string
  comments: number
  number: number
  html_url: string
}

interface IssuesGithubType {
  issues: IssuesType[]
  fetchUserIssues: (query: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesGithubType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<IssuesType[]>([])

  const NAME_REPO = import.meta.env.VITE_GITHUB_REPONAME
  const NAME_USER = import.meta.env.VITE_REACT_USERNAME_GITHUB

  const fetchUserIssues = useCallback(
    async (query?: string) => {
      try {
        if (query) {
          const { data } = await api.get(
            `/search/issues?q=${query}+repo:${NAME_USER}/${NAME_REPO}`,
          )
          setIssues(data.items)
        } else {
          const { data } = await api.get(
            `/repos/${NAME_USER}/${NAME_REPO}/issues`,
          )
          setIssues(data)
        }
      } catch (error) {
        console.error(error)
      }
    },
    [NAME_REPO, NAME_USER],
  )

  useEffect(() => {
    fetchUserIssues()
  }, [fetchUserIssues])

  return (
    <IssuesContext.Provider value={{ issues, fetchUserIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
