import React, { useContext } from 'react'
import styled from 'styled-components'
import { eventContext } from '../../App'

//Component
import img01 from '../../assets/img/praize_01.png'
import img02 from '../../assets/img/praize_02.png'
import img03 from '../../assets/img/praize_03.png'
import Heading02, { HeadingProps } from '../common/atoms/Heading02'
import ResultButtonList from './ResultButtonList'
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
    if (eventCount > 5) {
      return {
        text: '神',
        imagePath: img03
      }
    }　else if (eventCount >= 3 && eventCount <= 5) {
      return {
        text: '最高すぎる',
        imagePath: img02
      }
    } else {
      return {
        text: 'すごい、えらいね！',
        imagePath: img01
      }
    }
  }
  const ResultHeading: React.FC<HeadingProps> = (props) => {
    const Heading = styled(Heading02)`
      text-align: center;
      margin-top: 20px;
    `
    return <Heading text={props.text}/>
  }
  const ResultContentWrap = ({children}: any) => {
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
      <ResultHeading text="お疲れ様" />
      <ResultImage src={switchImagePath().imagePath} />
      <ResultContentWrap>
        <p>{switchImagePath().text}</p>
        <ResultButtonList />
      </ResultContentWrap>
    </>
  )
}

export default Result