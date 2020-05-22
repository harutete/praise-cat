import React from 'react'
import styled from 'styled-components'
//Component
import Textarea from '../common/atoms/Textarea'

const CommentWrapper = () => {
  const Wrapper  = styled.div`
    background: ${props => props.theme.colors.main};
    border-radius: 5px;
    width: 350px;
    max-width: 100%;
    padding: 15px;
  `
  const ExpantionTextarea = styled(Textarea)`
    border: none;
  `

  return (
    <Wrapper><ExpantionTextarea /></Wrapper>
  )
}

export default CommentWrapper