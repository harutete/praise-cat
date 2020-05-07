import React from 'react'
import styled from 'styled-components'

const FooterContent = () => {
  const Footer = styled.footer`
    background: ${props => props.theme.colors.main};
    border-bottom: 1px solid ${props => props.theme.colors.main};
    text-align: center;
  `
  const Copyright = styled.small`
    color: ${props => props.theme.colors.white};
    font-size: 1rem;
  `

  return (
    <Footer>
      <Copyright>&copy;2020</Copyright>
    </Footer>
  )
}

export default FooterContent