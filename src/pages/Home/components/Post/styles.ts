import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled(NavLink)`
  padding: 2rem;
  border-radius: 10px;

  background: ${props => props.theme.post};
  color: ${props => props.theme.text};

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h2 {
      color: ${props => props.theme.title};
      font-size: 1.25rem;
      line-height: 1.6;
      margin-top: -4px;
    }

    span {
      width: 6rem;
      font-size: 0.875rem;
      color: ${props => props.theme.span};
      text-align: start;
    }

    margin-bottom: 1.25rem;
  }

  p {
    width: 100%;
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
