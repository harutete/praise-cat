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
import ContentWrapper from '../components/atoms/ContentWrapper'
import MainContent from '../components/atoms/MainContent'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className="App">
      <ContentWrapper>
        <HeaderContent />
        <MainContent>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/list">
              <Calender />
            </Route>
          </Switch>
        </MainContent>
        <FooterContent />
      </ContentWrapper>
    </div>
  </ThemeProvider>
)

export default App;
