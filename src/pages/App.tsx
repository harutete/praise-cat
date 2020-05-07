import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../components/theme'
import { Route, Switch } from "react-router"
// components
import GlobalStyle from '../components/FoundationStyle'
import HeaderContent from '../components/organisms/HeaderContent'
import FooterContent from '../components/organisms/FooterContent'
import Calender from '../components/Calender'
import Home from '../components/Home'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className="App">
      <HeaderContent />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list">
            <Calender />
          </Route>
        </Switch>
      </main>
      <FooterContent />
    </div>
  </ThemeProvider>
)

export default App;
