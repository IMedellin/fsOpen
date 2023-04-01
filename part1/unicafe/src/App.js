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

  const getAvg = (g = good, b = bad) => {
    const handler = () => {
      let total = good + bad + neutral
      return Math.floor(((g - b) / total) * 100)

    }
    return handler
  }

  const getPercentage = () => {
    let total = good + bad + neutral
    return Math.floor((good / total) * 100)
  }

  const checkFeedback = () => {
    if (!good && !neutral && !bad) {
      return (
        <h3>No Feedback Given</h3>
      )
    } else {
      return (
        <>
          <Display name={"Good"} ratingNum={good} />
          <Display name={"Neutral"} ratingNum={neutral} />
          <Display name={"Bad"} ratingNum={bad} />
          <Display name={"All"} ratingNum={good + bad + neutral} />
          <Display name={"Average"} getAvg={getAvg(good, bad)} />
          <Display name={"Positive"} getPercentage={getPercentage()} />
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
