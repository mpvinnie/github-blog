import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo
} from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { BlogContext, Post as PostType } from '../../contexts/BlogContext'
import { api } from '../../lib/api'
import { PostContainer, PostContent, PostInfo } from './styles'

export function Post() {
  const { number } = useParams()

  const { user } = useContext(BlogContext)
  const [post, setPost] = useState<PostType>({} as PostType)

  useEffect(() => {
    async function loadPost() {
      const response = await api.get(
        `/repos/mpvinnie/github-blog/issues/${number}`
      )
      setPost(response.data)
    }

    loadPost()
  }, [number])

  let dateRelativeToNow = 'Há um tempo atrás'

  if (post.created_at) {
    dateRelativeToNow = formatDistanceToNow(new Date(post.created_at), {
      addSuffix: true,
      locale: ptBR
    })
  }

  console.log(JSON.stringify(post.created_at, null, 2))

  if (post) {
    return (
      <PostContainer>
        <PostInfo>
          <nav>
            <NavLink to='/'>
              <CaretLeft weight='bold' />
              VOLTAR
            </NavLink>
            <a href={post.html_url} target='_blank' rel='noreferrer'>
              VER NO GITHUB
              <ArrowSquareOut weight='bold' />
            </a>
          </nav>
          <h1>{post.title}</h1>
          <footer>
            <span>
              <GithubLogo weight='fill' />
              {user.login}
            </span>
            <span>
              <Calendar weight='fill' />
              {dateRelativeToNow}
            </span>
            <span>
              <ChatCircle weight='fill' />
              {post.comments}{' '}
              {post.comments === 1 ? 'comentário' : 'comentários'}
            </span>
          </footer>
        </PostInfo>
        <PostContent
          components={{
            code({ node, inline, className, children, style, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  useInlineStyles={false}
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  PreTag='div'
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {post.body}
        </PostContent>
      </PostContainer>
    )
  }
}
