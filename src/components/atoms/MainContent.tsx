import React from 'react'
import styled from 'styled-components'

const MainContent = ({ children, ...props }: any) => {
  const Main = styled.div`
    flex: 1 0 auto;
  `

  return (
    <Main {...props}>{children}</Main>
  )
}

export default MainContent
