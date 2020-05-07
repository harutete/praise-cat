import React from 'react'
import img01 from '../../assets/img/praize_01.png'
//Component
import Heading02 from '../common/atoms/Heading02'

const Result = () => {
  return (
    <>
      <Heading02 text="お疲れ様" />
      <img src={img01} />
      <p>すごい、えらいね！</p>
    </>
  )
}

export default Result