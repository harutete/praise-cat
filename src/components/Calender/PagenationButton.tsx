import React from 'react'
import styled from 'styled-components'
import UtilityButton from '../common/atoms/Button'

const PagenationButton: React.FC = (props) => {
  const List = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 20px;
  `

  return(
    <List>
      <li>
        <UtilityButton data-pagenation="prev" text="Prev" />
      </li>
      <li>
        <UtilityButton data-pagenation="next" text="Next" />
      </li>
    </List>
  )
}

export default PagenationButton