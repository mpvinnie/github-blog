import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PostContainer } from './styles'

interface PostProps {
  number: number
  title: string
  content: string
  createdAt: string
}

export function Post({ number, title, content, createdAt }: PostProps) {
  const dateRelativeToNow = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR
  })

  return (
    <PostContainer to={`/${number}`}>
      <header>
        <h2>{title}</h2>
        <span>{dateRelativeToNow}</span>
      </header>
      <p>{content}</p>
    </PostContainer>
  )
}
