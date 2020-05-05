import React from 'react'
import styled from 'styled-components'

const Heading01 = (props: { text: string }) => {
  const Heading = styled.h1`
    font-size: 2rem;
  `
  return (
    <Heading>{props.text}</Heading>
  )
}

export default Heading01