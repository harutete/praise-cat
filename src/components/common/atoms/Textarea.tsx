import React, { useState } from 'react'
import styled from 'styled-components'

const Textarea = () => {
  const [ isEmpty, setIsEmpty ] = useState(false)
  const checkValidation = (event: any) => {
    !!event.target.value.length ? setIsEmpty(true) : setIsEmpty(false)
    console.log({isEmpty})
  }
  const UtilityTextarea = styled.textarea`
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    max-width: 100%;
    padding: 5px;
  `

  return (
    <UtilityTextarea onBlur={checkValidation} />
  )
}

export default Textarea