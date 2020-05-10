import React from 'react'
import styled from 'styled-components'

const Heading01 = ({ children, ...props }: any) => {
  const Heading = styled.h1`
    font-size: 2rem;
  `
  return (
    <Heading className={props.className}>{children}</Heading>
  )
}

export default Heading01