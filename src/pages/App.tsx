import React from 'react'
import { Link } from 'react-router-dom'

// components
import UtilityButton from '../components/atoms/button'

const App = () => {
  const formattedDateStr  = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const weekDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const weekDayIndex = date.getDay()

    return `${year}/${month}/${day}(${weekDayArr[weekDayIndex]})`
  }
  return (
    <div className="App">
      <header>
        <h1>praise cat</h1>
      </header>
      <main>
        <h2>{formattedDateStr()}</h2>
        <p>今日がんばったことを書いてね</p>
        <div className="content-input-work">
          <div className="content-input-work__textarea">
            <textarea></textarea>
          </div>
          <div className="content-input-work__button-wrap">
            <UtilityButton text={'ほめて'} />
            <Link to="list">あしあと</Link>
          </div>
        </div>
      </main>
      <footer>
        <small>&copy;2020</small>
      </footer>
    </div>
  );
}

export default App;
