import React from 'react'
import img01 from '../../assets/img/praize_01.png'
//Component
import Heading02 from '../common/atoms/Heading02'
import UtilityButton from '../common/atoms/UtilityButton'

const Result = () => {
  return (
    <>
      <Heading02 text="お疲れ様" />
      <img src={img01} alt="" />
      <p>すごい、えらいね！</p>
      <UtilityButton isAccent isAnchor href="/" text="もっとほめて" />
      <UtilityButton isAnchor href="/list" text="あしあと" />
    </>
  )
}

export default Result