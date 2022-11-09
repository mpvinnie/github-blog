import styled from 'styled-components'

import coverImg from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  background-image: url(${coverImg});
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 18.5rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 4rem 0;

  img {
    width: 9.25rem;
    height: 6.125rem;
  }
`
