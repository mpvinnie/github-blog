import { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'
import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { HomeContainer, PostsContainer, PostsListContainer } from './styles'

export function Home() {
  const { posts } = useContext(BlogContext)

  const totalPosts = posts.length

  return (
    <HomeContainer>
      <Profile />
      <PostsListContainer>
        <header>
          <h2>Publicações</h2>
          <span>
            {totalPosts} {totalPosts === 1 ? 'publicação' : 'publicações'}
          </span>
        </header>

        <input type='text' placeholder='Buscar conteúdo' required />

        <PostsContainer>
          {posts.map(post => (
            <Post
              key={post.number}
              number={post.number}
              title={post.title}
              content={post.body}
              createdAt={post.created_at}
            />
          ))}
        </PostsContainer>
      </PostsListContainer>
    </HomeContainer>
  )
}
