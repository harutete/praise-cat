import React from 'react'
import styled from 'styled-components'

type Props = {
  src: string,
  alt?: string
}
const ResultImage: React.FC<Props> = (props) => {
  const alt = props.alt ? props.alt : ''
  const ImageWrap = styled.div`
    text-align: center;
    margin: 20px auto 0;
  `
  const Image = styled.img`
    max-width: 350px;
  `

  return (
    <ImageWrap>
      <Image src={props.src} alt={alt} />
    </ImageWrap>
  )
}

export default ResultImage