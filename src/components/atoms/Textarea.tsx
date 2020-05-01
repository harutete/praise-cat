import React from 'react'
import styled from 'styled-components'

const Textarea = () => {
  const UtilityTextarea = styled.textarea`
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    max-width: 100%;
    padding: 5px;
  `

  return (
    <UtilityTextarea />
  )
}

export default Textarea