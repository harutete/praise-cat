import React from 'react'
import styled from 'styled-components'
//Component
import Heading02, { HeadingProps } from '../common/atoms/Heading02'
import Textarea from '../common/atoms/Textarea'
import ButtonList from './ButtonList'

const HomeComponent = (({ date, onSubmit }: any) => {
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
      <DateHeading text={date} />
      <FormWrap>
        <p>今日がんばったことを書いてね</p>
        <form onSubmit={onSubmit}>
          <Textarea />
          <ButtonList />
        </form>
      </FormWrap>
    </>
  )
})

export default HomeComponent