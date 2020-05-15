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
        <UtilityButton isAccent isAnchor text={'もっとほめて'} href="/" />
      </li>
      <li>
        <UtilityButton isAnchor text={'あしあと'} href="list" />
      </li>
    </List>
  )
}

export default ResultButtonList