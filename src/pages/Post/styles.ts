import ReactMoarkdown from 'react-markdown'

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

    span {
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

export const PostContent = styled(ReactMoarkdown)`
  padding: 2.5rem 2rem;

  p {
    line-height: 1.6;
  }

  a {
    text-decoration: underline;
    color: ${props => props.theme.blue};
    line-height: 1.6;
  }

  pre {
    width: 100%;
    margin-top: 1.5rem;

    div {
      background: ${props => props.theme.post} !important;
      padding: 1rem;
      border-radius: 2px;

      span {
        margin: 0;
        text-shadow: none;
        background: none !important;
        color: ${props => props.theme.text};

        &.keyword,
        &.punctuation {
          color: ${props => props.theme['code-keyword']} !important;
        }

        &.number,
        &.string,
        &.boolean {
          color: ${props => props.theme['code-value']} !important;
        }

        &.comment {
          color: ${props => props.theme['code-comment']} !important;
        }

        &.token .tag .class-name {
          color: ${props => props.theme.blue} !important;
        }
      }
    }
  }
`
