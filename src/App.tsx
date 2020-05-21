import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/theme'
import { Route, Switch } from "react-router"
import { eventContext } from './contexts'
// components
import GlobalStyle from './components/FoundationStyle'
import HeaderContent from './components/common/organisms/HeaderContent'
import FooterContent from './components/common/organisms/FooterContent'
import HomeContainer from './containers/Home'
import CalenderContainer from './containers/Calender'
import ResultComponent from './containers/Result'
import ContentWrapper from './components/common/atoms/ContentWrapper'
import MainContent from './components/common/atoms/MainContent'

// TODO firebase入れたらこの形にする
// type EventDetailType = {
//   month: number,
//   day: [
//     {
//       day: number,
//       description: string[]
//     }
//   ]
// }
// type EventType = {
//   year: number,
//   month: EventDetailType[]
// }

export type EventType = {
  day: string,
  descriptions: string[]
}

const App: React.FC = () => {
  // TODO Firebase入れるときに復活させる
  // const [ user, setUser ] = useState('')
  const [ events, setEvents ] = useState<EventType[]>([])
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
                  <HomeContainer />
                </Route>
                <Route path="/list">
                  <CalenderContainer />
                </Route>
                <Route path="/result">
                  <ResultComponent />
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
