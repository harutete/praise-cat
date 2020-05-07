import React from 'react'
import styled from 'styled-components'

const ContentWrapper = ({ children, ...props }: any) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `

  return (
    <Wrapper {...props}>{children}</Wrapper>
  )
}

export default ContentWrapper