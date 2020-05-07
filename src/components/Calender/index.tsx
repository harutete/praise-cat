import React, { useState } from 'react'
import styled from 'styled-components'

//Component
import Heading02 from '../common/atoms/Heading02'

const Calender = () => {
  const fetchCurrentDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1

    return `${year}/${month}`
  }
  const drawingCalendar = (year?: number, month?: number): (string | number)[][] => {
    const date = new Date()
    const currentYear = year || date.getFullYear()
    const currentMonth = month ? month - 1 : date.getMonth()
    const startDate = new Date(currentYear, currentMonth, 1)
    const startWeekDay = startDate.getDay()
    const endDate = new Date(currentYear, currentMonth + 1, 0)
    const endDay = endDate.getDate()
    const dateArr = []
    let row
    let col
    let day = 1

    for (row = 0; row < 6; row++) {
      const weekArr = []
      for(col = 0; col < 7; col++) {
        if (row === 0 && startWeekDay > col) {
          weekArr.push('')
        } else if (day > endDay) {
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
  const date = fetchCurrentDate()
  const currentCalendar = drawingCalendar()
  const [ currentDate, setCurrentDate ] = useState(date)
  const [ calender, setCalendar ] = useState(currentCalendar)
  const reRenderCalender = (event: any) => {
    const state = event.target.getAttribute('data-pagenation')
    const dateArr = currentDate.split('/').map(date => parseInt(date, 10))
    if (state === 'prev') {
      const year = dateArr[1] === 1 ? dateArr[0] -1 : dateArr[0]
      const month = dateArr[1] === 1 ? 12 : dateArr[1] - 1
      const renderCalender = drawingCalendar(year, month)
      setCurrentDate(`${year}/${month}`)
      setCalendar(renderCalender)
    } else {
      const year = dateArr[1] === 12 ? dateArr[0] + 1 : dateArr[0]
      const month = dateArr[1] === 12 ? 1 : dateArr[1] + 1
      const renderCalender = drawingCalendar(year, month)
      setCurrentDate(`${year}/${month}`)
      setCalendar(renderCalender)
    }
  }
  const weekDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div>
      <Heading02 text="がんばった一覧" />
      <table>
        <caption>{currentDate}</caption>
        <thead>
          <tr>
            {weekDayArr.map((day, index) => <th key={`weekday_${index}`}>{day}</th>)}
          </tr>
        </thead>
        <tbody>
          {calender.map((week, index) =>
            <tr key={`week_${index}`}>
              {week.map((day, index) => <td key={`day_${index}`}>{day}</td>)}
            </tr>
          )}
        </tbody>
      </table>
      <ul>
        <li>
          <button type="button" onClick={reRenderCalender} data-pagenation="prev">Prev</button>
        </li>
        <li>
          <button type="button" onClick={reRenderCalender} data-pagenation="next">Next</button>
        </li>
      </ul>
    </div>
  )
}

export default Calender