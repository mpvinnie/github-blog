import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react'
import { api } from '../lib/api'

type User = {
  id: number
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}

export type Post = {
  number: number
  html_url: string
  title: string
  created_at: string
  comments: number
  body: string
}

interface BlogContextType {
  user: User
  posts: Post[]
}

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [loggedUser, setLoggedUser] = useState('mpvinnie')
  const [user, setUser] = useState({} as User)
  const [posts, setPosts] = useState<Post[]>([])

  const fetchUserData = useCallback(async () => {
    const response = await api.get(`/users/${loggedUser}`)
    setUser(response.data)
  }, [loggedUser])

  async function fetchPosts(query?: string) {
    const url = `/search/issues?q=${query || ''} repo:mpvinnie/github-blog`

    const response = await api.get(url)

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <BlogContext.Provider
      value={{
        user,
        posts
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
