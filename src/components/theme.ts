import 'styled-components'

export const theme = {
  colors: {
    textColor: '#333333',
    main: '#9DDCDC',
    secondary: '#FFEBB7',
    accent: '#E67A7A'
  }
} as const

type AppTheme = typeof theme

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}