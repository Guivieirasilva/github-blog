import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../../lib/axios'

interface ProfileContextType {
  name: string
  html_url: string
  followers: number
  company: string
  bio: string
  login: string
}

interface UserProfileType {
  user: ProfileContextType
}

type ProfileProviderType = {
  children: ReactNode
}

export const ProfileContext = createContext({} as UserProfileType)

export function ProfileProvider({ children }: ProfileProviderType) {
  const [user, setUser] = useState<UserProfileType['user']>()

  const NAME_USER = import.meta.env.VITE_REACT_USERNAME_GITHUB

  const fechtUser = useCallback(async () => {
    try {
      const { data } = await api.get(`users/${NAME_USER}`)
      setUser(data)
    } catch (err) {
      console.error(err)
    }
  }, [NAME_USER])

  useEffect(() => {
    fechtUser()
  }, [fechtUser])

  if (user) {
    return (
      <ProfileContext.Provider value={{ user }}>
        {children}
      </ProfileContext.Provider>
    )
  }
}
