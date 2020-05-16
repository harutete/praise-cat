import React from 'react'
import styled from 'styled-components'
//Component
import UtilityButton from '../common/atoms/UtilityButton'

const ResultButtonList = () => {
  const List  = styled.ul`
    display: flex;
    list-style: none;
    margin-right: -10px;
    li {
      margin-right: 10px;
    }
  `
  return (
    <List>
      <li>
        <UtilityButton isAccent isAnchor href="/">もっとほめて</UtilityButton>
      </li>
      <li>
        <UtilityButton isAnchor href="list">あしあと</UtilityButton>>
      </li>
    </List>
  )
}

export default ResultButtonList