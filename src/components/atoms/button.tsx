import React from 'react'
import styled from 'styled-components'

export default (props: {text: string}) => {
  const UtilityButton = styled.button`
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #333333;
    border-radius: 4px;
    padding: 5px;
  `

  return (
    <UtilityButton>{props.text}</UtilityButton>
  )
}