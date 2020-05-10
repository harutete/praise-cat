import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Heading01 from '../atoms/Heading01'

const HeaderContent = () => {
  const Header = styled.header`
    background: ${props => props.theme.colors.main};
    padding: 5px;
  `
  const Heading = styled(Heading01)`
    text-align: center;
    text-shadow: 0 1px 2px #7FB3B3;
    a {
      color: ${props => props.theme.colors.white};
      text-decoration: none;
    }
  `

  return (
    <Header>
      <Heading>
        <Link to="/">PriseCat</Link>
      </Heading>
    </Header>
  )
}

export default HeaderContent