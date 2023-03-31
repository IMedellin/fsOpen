import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <>
      <h1>Give Feedback</h1>
      <Button />
      <Button />
      <Button />
      <h2>Statistics</h2>
      <Display />
      <Display />
      <Display />
    </>
  )
}

export default App
