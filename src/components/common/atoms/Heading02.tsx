import React from 'react'
import styled from 'styled-components'

export type HeadingProps = {
  text: string,
  className?: string
}

const Heading02: React.FC<HeadingProps> = (props) => {
  const Heading = styled.h2`
    font-size: 1.8rem;
  `
  return (
    <Heading className={props.className}>{props.text}</Heading>
  )
}

export default Heading02