import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../components/theme'
// components
import GlobalStyle from '../components/FoundationStyle'
import HeaderContent from '../components/organisms/header'
import UtilityButton from '../components/atoms/button'
import Textarea from '../components/atoms/Textarea'

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
  const captionDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()

    return `${year}/${month}`
  }
  const drawingCalendar = (year?: number, month?: number): (string | number)[][] => {
    const date = new Date()
    const currentYear = year || date.getFullYear()
    const currentMonth = month || date.getMonth()
    const isLeapYear =
      (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
      currentYear % 400 ===0
    const startDate = new Date(currentYear, currentMonth, 1)
    const startDay = startDate.getDay()
    const endDate = new Date(currentYear, currentMonth + 1, 0)
    const endDay = endDate.getDay()
    const end = endDate.getDate()
    const dateArr = []
    let row
    let col
    let day = 1

    for (row = 0; row < 6; row++) {
      const weekArr = []
      for(col = 0; col < 7; col++) {
        if (row === 0 && startDay > col) {
          weekArr.push('')
        } else if (day > end) {
          weekArr.push('')
          day++
        } else {
          weekArr.push(day)
          day++
        }
      }

      dateArr.push(weekArr)
    }

    return dateArr
  }
  const calendar = drawingCalendar()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <HeaderContent />
        <main>
          <h2>{formattedDateStr()}</h2>
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
          <div>
            <h3>がんばったきせき</h3>
            <table>
              <caption>{captionDate()}</caption>
              <thead>
                <tr>
                  {weekDayArr.map((day, index) => <th key={`day_${index}`}>{day}</th>)}
                </tr>
              </thead>
                {calendar.map(week =>
                  <tr>
                    {week.map(day => <td>{day}</td>)}
                  </tr>
                )}
              <tbody>
              </tbody>
            </table>
          </div>
        </main>
        <footer>
          <small>&copy;2020</small>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
