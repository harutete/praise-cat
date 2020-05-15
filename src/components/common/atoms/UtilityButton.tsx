import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type Props = {
  text: string,
  isAccent?: boolean,
  isAnchor?: boolean,
  href?: string,
  type?: "button" | "submit" | "reset" | undefined
  className?: string
}

const UtilityButton: React.FC<Props> = (props) => {
  const fixHref = props.href || ''
  const Button = styled.button`
    display: inline-block;
    cursor: pointer;
    background: ${props.isAccent ? '#BEEBE9' : '#EEEEEE'};
    border: none;
    border-radius: 4px;
    color: #333333;
    font-family: 'Kosugi Maru';
    font-size: 1.5rem;
    line-height: 1;
    padding: 5px;
  `
  const AnchorButton = Button.withComponent(Link)
  const FixAnchorButton = styled(AnchorButton)`
    text-decoration: none;
  `
  return (
    props.isAnchor
      ? <FixAnchorButton className={props.className} to={fixHref}>{props.text}</FixAnchorButton>
      : <Button {...props} className={props.className} type={props.type ? props.type : 'button'}>{props.text}</Button>
  )
}

export default UtilityButton