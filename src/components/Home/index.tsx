import React from 'react'
//Component
import Heading02 from '../common/atoms/Heading02'
import Textarea from '../common/atoms/Textarea'
import ButtonList from './ButtonList'

const Home = () => {
  const formattedDateStr  = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const weekDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const weekDayIndex = date.getDay()

    return `${year}/${month}/${day}(${weekDayArr[weekDayIndex]})`
  }
  return (
    <>
      <Heading02 text={formattedDateStr()} />
      <p>今日がんばったことを書いてね</p>
      <div className="content-input-work">
        <div className="content-input-work__textarea">
          <Textarea />
        </div>
        <ButtonList />
      </div>
    </>
  )
}

export default Home