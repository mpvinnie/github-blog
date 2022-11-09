import { PostContainer } from './styles'

interface PostProps {
  id: string
  title: string
  content: string
  createdAt: string
}

export function Post({ title, content, createdAt }: PostProps) {
  return (
    <PostContainer>
      <header>
        <h2>{title}</h2>
        <span>{createdAt}</span>
      </header>
      <p>{content}</p>
    </PostContainer>
  )
}
