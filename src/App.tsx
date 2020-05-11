import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/theme'
import { Route, Switch } from "react-router"
// components
import GlobalStyle from './components/FoundationStyle'
import HeaderContent from './components/common/organisms/HeaderContent'
import FooterContent from './components/common/organisms/FooterContent'
import Calender from './components/Calender'
import Result from './components/Result'
import Home from './components/Home'
import ContentWrapper from './components/common/atoms/ContentWrapper'
import MainContent from './components/common/atoms/MainContent'

const initialState = {
  user: '',
  events: []
}
export const userDataContext = React.createContext({
  user: '',
  events: []
})

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <userDataContext.Provider value={initialState}>
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
              <Route path="/result">
                <Result />
              </Route>
            </Switch>
          </MainContent>
          <FooterContent />
        </ContentWrapper>
      </div>
    </userDataContext.Provider>
  </ThemeProvider>
)

export default App;
