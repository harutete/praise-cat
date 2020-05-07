import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap&subset=japanese');
  :root {
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    color: #333333;
    font-family: 'Kosugi Maru', sans-serif;
    font-size: 1.5rem;
  }
  .App {
    height: 100vh;
  }
`

export default GlobalStyle