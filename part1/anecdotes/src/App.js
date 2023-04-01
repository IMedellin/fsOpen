import { useState } from 'react'
import "./styles/appStyles.css"
import BestAncedote from './components/bestAncedote'
function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [score, setScore] = useState({})


  //Getting random ancedotes
  const handleAncedote = () => {
    let newSelected = Math.floor(Math.random(anecdotes.length) * anecdotes.length)
    setSelected(newSelected)
  }

  //Handle the voting of random ancedotes with and object
  const handleVote = () => {
    const newScore = {
      ...score,
    }
    //The object will use the index of the ancedote as the key and the num of votes as the value
    if (!newScore[selected]) {
      newScore[selected] = 1
    } else {
      newScore[selected] += 1
    }

    setScore(newScore)
  }


  const findBestAncedote = () => {
    const scoresArray = Object.values(score) // Will make array containing scores
    let best = Math.max(...scoresArray) //Finds best score in array

    for (let key in score) {
      if (score[key] >= best) {
        return (
          <p>{anecdotes[key]}<br></br>with {score[key]} votes!</p>
        )
      }
    }
  }

  if (!score[selected]) {
    score[selected] = 0
  }


  return (
    <>
      <div>
        <h1>Ancedote of the day</h1>
        <p>{anecdotes[selected]}<br></br>Has {score[selected]} votes</p>
        <div className="buttons">
          <button onClick={handleVote}>Vote</button>
          <button onClick={handleAncedote}>Next Ancedote</button>
        </div>
        <h1>Ancedote with the most votes</h1>
        <BestAncedote findBestAncedote={findBestAncedote} />
      </div>
    </>

  )
}

export default App;
