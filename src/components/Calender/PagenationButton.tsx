import React from 'react'
import styled from 'styled-components'
import UtilityButton from '../common/atoms/UtilityButton'

type Props = {
  onClick: (event: any) => void
}
const PagenationButton: React.FC<Props> = (props) => {
  const List = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 20px;
  `
  const Button = styled.button`
    display: inline-block;
    cursor: pointer;
    background: #EEEEEE;
    border: none;
    border-radius: 4px;
    color: #333333;
    font-family: 'Kosugi Maru';
    font-size: 1.5rem;
    line-height: 1;
    padding: 5px;
  `

  return(
    <List>
      <li>
        <Button data-pagenation="prev" onClick={props.onClick}>Prev</Button>
      </li>
      <li>
        <Button data-pagenation="next" onClick={props.onClick}>Next</Button>
      </li>
    </List>
  )
}

export default PagenationButton