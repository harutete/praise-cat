import React, { useContext } from 'react'
import { eventContext } from '../../App'

//Component
import img01 from '../../assets/img/praize_01.png'
import img02 from '../../assets/img/praize_02.png'
import img03 from '../../assets/img/praize_03.png'
import Heading02 from '../common/atoms/Heading02'
import UtilityButton from '../common/atoms/UtilityButton'
import ResultImage from './ResultImage'

const Result = () => {
  const { events } = useContext(eventContext)
  const switchImagePath = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const today = `${year}/${month}/${day}`
    const todayEvents = events.filter(event => event.day === today)
    const eventCount = todayEvents.length ? todayEvents[0].descriptions.length : 0
    console.log({eventCount})
    if (eventCount > 5) {
      return {
        text: '神',
        imagePath: img03
      }
    }　else if (eventCount >= 3 && eventCount <= 5) {
      return {
        text: 'やばい',
        imagePath: img02
      }
    } else {
      return {
        text: 'すごい、えらいね！',
        imagePath: img01
      }
    }
  }
  return (
    <>
      <Heading02 text="お疲れ様" />
      <ResultImage src={switchImagePath().imagePath} />
      <p>{switchImagePath().text}</p>
      <UtilityButton isAccent isAnchor href="/" text="もっとほめて" />
      <UtilityButton isAnchor href="/list" text="あしあと" />
    </>
  )
}

export default Result