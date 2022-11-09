import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { HomeContainer, PostsContainer, PostsListContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <PostsListContainer>
        <header>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </header>

        <input type='text' placeholder='Buscar conteúdo' required />

        <PostsContainer>
          <Post
            id='1'
            title='JavaScript data types and data structures'
            content='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
            createdAt='Há 1 dia'
          />
          <Post
            id='2'
            title='JavaScript data types and data structures'
            content='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
            createdAt='Há 1 dia'
          />
          <Post
            id='3'
            title='JavaScript data types and data structures'
            content='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
            createdAt='Há 1 dia'
          />
          <Post
            id='4'
            title='JavaScript data types and data structures'
            content='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
            createdAt='Há 1 dia'
          />
          <Post
            id='5'
            title='JavaScript data types and data structures'
            content='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
            createdAt='Há 1 dia'
          />
          <Post
            id='6'
            title='JavaScript data types and data structures'
            content='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.'
            createdAt='Há 1 dia'
          />
        </PostsContainer>
      </PostsListContainer>
    </HomeContainer>
  )
}
