import styled from 'styled-components'

export const PostContainer = styled.div`
  padding: 0 2rem;
  max-width: 56rem;
  margin: -6rem auto;
`

export const PostInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 2rem;
  border-radius: 10px;

  background: ${props => props.theme.profile};

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.25rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${props => props.theme.blue};
      font-size: 0.75rem;
      font-weight: bold;
    }
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${props => props.theme.span};

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${props => props.theme.label};
      }
    }
  }
`
