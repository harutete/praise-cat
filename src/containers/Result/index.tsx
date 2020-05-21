import React, { useContext } from 'react'
import { eventContext } from '../../contexts'
import img01 from '../../assets/img/praize_01.png'
import img02 from '../../assets/img/praize_02.png'
import img03 from '../../assets/img/praize_03.png'
import ResultComponent from '../../components/Result'

const ResultContainer = () => {
  const { events } = useContext(eventContext)
  const switchImagePath = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const today = `${year}/${month}/${day}`
    const todayEvents = events.filter(event => event.day === today)
    const eventCount = todayEvents.length ? todayEvents[0].descriptions.length : 0
    if (eventCount > 5) {
      return {
        text: '神',
        src: img03,
        alt: ''
      }
    }　else if (eventCount >= 3 && eventCount <= 5) {
      return {
        text: '最高すぎる',
        src: img02,
        alt: ''
      }
    } else {
      return {
        text: 'すごい、えらいね！',
        src: img01,
        alt: ''
      }
    }
  }

  return (
    <ResultComponent
      src={switchImagePath().src}
      text={switchImagePath().text}
      alt={switchImagePath().alt}
    />
  )
}

export default ResultContainer