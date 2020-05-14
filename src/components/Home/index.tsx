import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { eventContext } from '../../App'
//Component
import Heading02 from '../common/atoms/Heading02'
import Textarea from '../common/atoms/Textarea'
import ButtonList from './ButtonList'

const Home = withRouter((props) => {
  const formattedDateStr  = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const weekDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const weekDayIndex = date.getDay()

    return `${year}/${month}/${day}(${weekDayArr[weekDayIndex]})`
  }
  const { events, setEvents } = useContext(eventContext)
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

    props.history.push('/result')
  }
  return (
    <>
      <Heading02 text={formattedDateStr()} />
      <p>今日がんばったことを書いてね</p>
      <div className="content-input-work">
        <form onSubmit={addDescription}>
          <Textarea />
          <button type='submit'>ほめて</button>
        </form>
          {/* <ButtonList onClick={addDescription} /> */}
      </div>
    </>
  )
})

export default Home