import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${props => props.theme.blue};
  }

  html {
    @media (max-width: 1120px) {
      font-size: 87.5%;
    }

    @media (max-width: 720px) {
      font-size: 75%;
    }
  }

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }

  body, input {
    border: 0;
  }

  button: {
    cursor: pointer;
  }
`
