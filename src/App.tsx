import React, { useState } from 'react'
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

type EventType = {
  day: string,
  descriptions: string[] | []
}

type UseDataContextType = {
  events: EventType[] | [],
  setEvents: (events: EventType[] | []) => void
}
export const eventContext = React.createContext<UseDataContextType>({
  events: [],
  setEvents: () => undefined
})

// FIXME context切り分ける
const App: React.FC = () => {
  const [ user, setUser ] = useState('')
  const [ events, setEvents ] = useState<EventType[] | []>([])
  const handleClick = (value: string, date?: string) => {
    const currentDate = date ? new Date(date) : new Date()
    setEvents([...events, ])
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <eventContext.Provider value={{events, setEvents}}>
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
      </eventContext.Provider>
    </ThemeProvider>
  )
}

export default App;
