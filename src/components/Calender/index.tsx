import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { eventContext } from '../../App'

//Component
import Heading02 from '../common/atoms/Heading02'
import CalenderTable from './CalenderTable'
import PagenationButton from './PagenationButton'

export type detailDataType = {
  day: number,
  description: string[]
}

const Calender = () => {
  const { events } = useContext(eventContext)
  const fetchCurrentDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1

    return `${year}/${month}`
  }
  const drawingCalendar = (year?: number, month?: number): (string | detailDataType)[][] => {
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
          const currentDayData = events.find(event => {
            const currentDay = event.day.split('/')
            return parseInt(currentDay[2], 10) === day
          })
          weekArr.push({
            day: day,
            description: currentDayData ?
              [...currentDayData.descriptions] :
              []
          })
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
  type HeadingProps = {
    text: string,
    className?: string
  }
  const CalendarHeading: React.FC<HeadingProps> = (props) => {
    const Heading = styled(Heading02)`
      text-align: center;
      margin-top: 20px;
    `
    return <Heading text={props.text}/>
  }
  return (
    <>
      <CalendarHeading text="がんばった一覧" />
      <CalenderTable
        currentDate={currentDate}
        weekDayArr={weekDayArr}
        calenderDate={calender}
      />
      <PagenationButton onClick={reRenderCalender} />
    </>
  )
}

export default Calender