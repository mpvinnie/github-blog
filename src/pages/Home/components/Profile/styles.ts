import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  gap: 2rem;

  background: ${props => props.theme.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    object-fit: cover;
  }
`

export const ProfileInfos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${props => props.theme.title};
      font-size: 1.5rem;
      line-height: 1.3;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      font-size: 0.75rem;
      font-weight: bold;
      color: ${props => props.theme.blue};
    }
  }

  main {
    flex: 1;
    padding: 0.5rem 0;

    span {
      font-size: 1rem;
      line-height: 1.6;
    }
  }

  footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${props => props.theme.subtitle};

      svg {
        color: ${props => props.theme.label};
      }
    }
  }
`
