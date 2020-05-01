import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Kosugi Maru';
    src: url(../../../assets/fonts/KosugiMaru-Regular.ttf)
  }
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
`

export default GlobalStyle