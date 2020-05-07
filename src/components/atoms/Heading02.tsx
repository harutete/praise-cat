import React from 'react'
import styled from 'styled-components'

const Heading02 = (props: { text: string }) => {
  const Heading = styled.h2`
    font-size: 1.8rem;
  `
  return (
    <Heading>{props.text}</Heading>
  )
}

export default Heading02