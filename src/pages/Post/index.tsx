import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { PostContainer, PostInfo } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInfo>
        <nav>
          <NavLink to='/'>
            <CaretLeft weight='bold' />
            VOLTAR
          </NavLink>
          <NavLink to='#'>
            VER NO GITHUB
            <ArrowSquareOut weight='bold' />
          </NavLink>
        </nav>
        <h1>JavaScript data types and data structures</h1>
        <footer>
          <a href='#'>
            <GithubLogo weight='fill' />
            mpvinnie
          </a>
          <a href='#'>
            <Calendar weight='fill' />
            Há 1 dia
          </a>
          <a href='#'>
            <ChatCircle weight='fill' /> 5 comentários
          </a>
        </footer>
      </PostInfo>
    </PostContainer>
  )
}
