import React, { useContext, Children } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { HeadingProps } from '../common/atoms/Heading02'
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
  const DateHeading: React.FC<HeadingProps> = (props) => {
    const Heading = styled(Heading02)`
      text-align: center;
      margin-top: 20px;
    `
    return <Heading text={props.text}/>
  }
  const FormWrap = ({children}: any) => {
    const Wrap = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
      & > * {
        margin-top: 20px;
      }
    `

    return <Wrap>{children}</Wrap>
  }
  return (
    <>
      <DateHeading text={formattedDateStr()} />
      <FormWrap>
        <p>今日がんばったことを書いてね</p>
        <form onSubmit={addDescription}>
          <Textarea />
          <ButtonList />
        </form>
      </FormWrap>
    </>
  )
})

export default Home