import React from 'react'
import styled from 'styled-components'
//Component
import UtilityButton from '../common/atoms/UtilityButton'

const ButtonList = () => {
  const List  = styled.ul`
    display: flex;
    list-style: none;
    margin-right: -10px;
    li {
      margin: 20px 10px 0 0;
    }
  `
  return (
    <List>
      <li>
        <UtilityButton isAccent type="submit">ほめて</UtilityButton>
      </li>
      <li>
        <UtilityButton isAnchor href="list">あしあと</UtilityButton>
      </li>
    </List>
  )
}

export default ButtonList