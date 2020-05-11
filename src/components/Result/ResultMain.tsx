import React, { useContext } from 'react'
import { userDataContext } from '../../App'

//Component
import img01 from '../../assets/img/praize_01.png'
import img02 from '../../assets/img/praize_02.png'
import img03 from '../../assets/img/praize_03.png'
import Heading02 from '../common/atoms/Heading02'
import UtilityButton from '../common/atoms/UtilityButton'
import ResultImage from './ResultImage'

const Result = () => {
  const consume = useContext(userDataContext)
  return (
    <>
      <Heading02 text="お疲れ様" />
      <ResultImage src={img01} />
      <p>すごい、えらいね！</p>
      <UtilityButton isAccent isAnchor href="/" text="もっとほめて" />
      <UtilityButton isAnchor href="/list" text="あしあと" />
    </>
  )
}

export default Result