import React from 'react'
import styled from 'styled-components'

const Textarea = (props: any) => {
  const UtilityTextarea = styled.textarea`
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    width: 100%;
    max-width: 100%;
    padding: 5px;
  `

  return (
    <UtilityTextarea {...props} onBlur={props.onBlur}/>
  )
}

export default Textarea