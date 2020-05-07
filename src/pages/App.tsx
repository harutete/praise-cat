import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../components/theme'
// components
import GlobalStyle from '../components/FoundationStyle'
import HeaderContent from '../components/organisms/header'
import Heading02 from '../components/atoms/Heading02'
import UtilityButton from '../components/atoms/button'
import Textarea from '../components/atoms/Textarea'
import Calender from '../components/Calender'

const App: React.FC = () => {
  const weekDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const formattedDateStr  = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const weekDayIndex = date.getDay()

    return `${year}/${month}/${day}(${weekDayArr[weekDayIndex]})`
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <HeaderContent />
        <main>
          <Heading02 text={formattedDateStr()} />
          <p>今日がんばったことを書いてね</p>
          <div className="content-input-work">
            <div className="content-input-work__textarea">
              <Textarea />
            </div>
            <div className="content-input-work__button-wrap">
              <UtilityButton isAccent text={'ほめて'} />
              <UtilityButton isAnchor text={'あしあと'} href="list" />
            </div>
          </div>
          <Calender />
        </main>
        <footer>
          <small>&copy;2020</small>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
