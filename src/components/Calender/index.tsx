import React from 'react'
import styled from 'styled-components'
//Type
import { detailDataType } from '../../containers/Calender'
//Component
import Heading02, { HeadingProps } from '../common/atoms/Heading02'
import CalenderTable from './CalenderTable'
import PagenationButton from './PagenationButton'

type Props = {
  currentDate: string,
  weekDayArr: string[],
  calenderDate: (string | detailDataType)[][],
  onClick: (event: any) => void
}

const CalenderComponent: React.FC<Props> = (props) => {
  const CalendarHeading: React.FC<HeadingProps> = (props) => {
    const Heading = styled(Heading02)`
      text-align: center;
      margin-top: 20px;
    `
    return <Heading text={props.text}/>
  }
  return (
    <>
      <CalendarHeading text="あしあと" />
      <CalenderTable
        currentDate={props.currentDate}
        weekDayArr={props.weekDayArr}
        calenderDate={props.calenderDate}
      />
      <PagenationButton onClick={props.onClick} />
    </>
  )
}

export default CalenderComponent