import React from 'react'
import styled from 'styled-components'

type Props = {
  text: string,
  className?: string
}

const Heading01: React.FC<Props> = (props) => {
  const Heading = styled.h1`
    font-size: 2rem;
  `
  return (
    <Heading className={props.className}>{props.text}</Heading>
  )
}

export default Heading01