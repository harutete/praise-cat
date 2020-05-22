import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { eventContext } from '../../contexts'
import HomeComponent from '../../components/Home'

const formattedDateStr  = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const weekDayIndex = date.getDay()

  return `${year}/${month}/${day}(${weekDayArr[weekDayIndex]})`
}
const HomeContainer: React.FC = () => {
  const [ isEmpty, setIsEmpty ] = useState(false)
  const checkValidation = (event: any) => {
    const value = event.target.value
    !!value.length ? setIsEmpty(false) : setIsEmpty(true)
  }
  const { events, setEvents } = useContext(eventContext)
  const history = useHistory()
  const addDescription = (event: any) => {
    event.preventDefault()
    const textareaCollection = event.target.getElementsByTagName('textarea')
    const value: string = [...textareaCollection][0].value
    if (value === '') return
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const eventsArr = [...events]
    const findCurrentData = eventsArr.find(event => event.day === `${year}/${month}/${day}`)
    if (!!findCurrentData) {
      const mergedEventsArr = eventsArr.map(event => {
        if (event.day === findCurrentData.day) {
          event.descriptions.push(value)
        }
        return event
      })
      setEvents(mergedEventsArr)
    } else {
      eventsArr.push({
        day: `${year}/${month}/${day}`,
        descriptions: [value]
      })
      setEvents(eventsArr)
    }

    history.push('/result')
  }
  return (
    <HomeComponent
      date={formattedDateStr()}
      onSubmit={addDescription}
      onBlue={checkValidation}
      isEmpty={isEmpty}
    />
  )
}

export default HomeContainer