import React from 'react'
import styled from 'styled-components'

//Component
import Heading02, { HeadingProps } from '../common/atoms/Heading02'
import ResultButtonList from './ResultButtonList'
import ResultImage from './ResultImage'

type Props = {
  src: string,
  text: string,
  alt: string
}
const Result: React.FC<Props> = ({src, text, alt}) => {
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
      <ResultImage src={src} alt={alt} />
      <ResultContentWrap>
        <p>{text}</p>
        <ResultButtonList />
      </ResultContentWrap>
    </>
  )
}

export default Result