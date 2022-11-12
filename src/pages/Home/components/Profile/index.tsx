import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'
import { ProfileContainer, ProfileInfos } from './styles'

export function Profile() {
  const { user } = useContext(BlogContext)

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt='' />
      <ProfileInfos>
        <header>
          <h1>{user.name}</h1>
          <a href={user.html_url} target='_blank' rel='noreferrer'>
            GITHUB
            <ArrowSquareOut weight='bold' />
          </a>
        </header>
        <main>
          <span>{user.bio}</span>
        </main>
        <footer>
          <span>
            <GithubLogo size={18} weight='fill' />
            {user.login}
          </span>
          <span>
            <Buildings size={18} weight='fill' />
            {user.company}
          </span>
          <span>
            <Users size={18} weight='fill' />
            {user.followers} {user.followers === 1 ? 'seguidor' : 'seguidores'}
          </span>
        </footer>
      </ProfileInfos>
    </ProfileContainer>
  )
}
