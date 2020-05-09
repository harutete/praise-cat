import React, { useState } from 'react'
import styled from 'styled-components'

const Textarea = () => {
  const [ isEmpty, setIsEmpty ] = useState(false)
  const checkValidation = (event: any) => {
    const value = event.target.value
    !!value.length ? setIsEmpty(false) : setIsEmpty(true)
  }
  const UtilityTextarea = styled.textarea`
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    max-width: 100%;
    padding: 5px;
  `
  const CautionText = styled.p`
    color: ${props => props.theme.colors.accent}
  `

  return (
    <>
      <UtilityTextarea onBlur={checkValidation}/>
      { isEmpty && <CautionText>*テキストを入力してください</CautionText>}
    </>
  )
}

export default Textarea