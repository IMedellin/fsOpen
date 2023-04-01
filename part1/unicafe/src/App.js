import { useState } from 'react'
import Button from './components/button'
import Display from './components/display'


const App = () => {
  // save clicks of each button to its own state
  let [good, setGood] = useState(0)
  let [neutral, setNeutral] = useState(0)
  let [bad, setBad] = useState(0)


  const handleGood = () => {
    setGood(good += 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral += 1)
  }

  const handleBad = () => {
    setBad(bad += 1)
  }

  const checkFeedback = () => {
    if (!good && !neutral && !bad) {
      return (
        <h3>No Feedback Given</h3>
      )
    } else {
      return (
        <>
          <Display good={good} bad={bad} neutral={neutral} />
        </>
      )
    }
  }


  return (
    <>
      <h1>Give Feedback</h1>
      <Button text={'Good'} handleClick={handleGood} />
      <Button text={'Neutral'} handleClick={handleNeutral} />
      <Button text={'Bad'} handleClick={handleBad} />
      <h2>Statistics</h2>
      <>{checkFeedback()}</>
    </>
  )
}

export default App
