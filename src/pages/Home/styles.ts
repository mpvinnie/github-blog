import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 0 2rem;
  max-width: 56rem;
  margin: -6rem auto;
`

export const PostsListContainer = styled.div`
  margin-top: 4.5rem;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    h2 {
      font-size: 1.125rem;
      color: ${props => props.theme.subtitle};
    }

    span {
      font-size: 0.875rem;
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${props => props.theme.input};
    border: 1px solid ${props => props.theme.border};

    font-size: 1rem;
    color: ${props => props.theme.text};

    &::placeholder {
      color: ${props => props.theme.label};
    }
  }
`

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  padding: 3rem 0;
`
