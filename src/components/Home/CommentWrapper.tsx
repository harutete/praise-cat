import React from 'react'
import styled from 'styled-components'
//Component
import Textarea from '../common/atoms/Textarea'

const CommentWrapper = ({onBlur, isEmpty}: any) => {
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
  const CautionText = styled.p`
    color: ${props => props.theme.colors.accent}
  `
  return (
    <Wrapper>
      <ExpantionTextarea onBlur={onBlur} />
      { isEmpty && <CautionText>*テキストを入力してください</CautionText>}
    </Wrapper>
  )
}

export default CommentWrapper