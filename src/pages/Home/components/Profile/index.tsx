import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { ProfileContainer, ProfileInfos } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src='https://github.com/mpvinnie.png' alt='' />
      <ProfileInfos>
        <header>
          <h1>Vinicius Peres</h1>
          <a href='#'>
            GITHUB
            <ArrowSquareOut weight='bold' />
          </a>
        </header>
        <main>
          <span>
            Desenvolvedor Junior Full-Stack. Apaixonado por programação.
          </span>
        </main>
        <footer>
          <a href='#'>
            <GithubLogo size={18} weight='fill' /> mpvinnie
          </a>
          <a href='#'>
            <Buildings size={18} weight='fill' /> Zenvia
          </a>
          <a href='#'>
            <Users size={18} weight='fill' /> 4 seguidores
          </a>
        </footer>
      </ProfileInfos>
    </ProfileContainer>
  )
}
