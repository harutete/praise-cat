import React from 'react'
import ResultMain from './ResultMain'

type Props = {
  src: string,
  text: string,
  alt: string
}

const ResultComponent: React.FC<Props> = ({src, text, alt}) => {
  return (
    <ResultMain
      src={src}
      text={text}
      alt={alt}
    />
  )
}

export default ResultComponent