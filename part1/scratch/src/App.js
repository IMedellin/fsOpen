import { useState } from "react"
import Display from "./components/display"
import Button from "./components/button"
import History from "./components/history"

const App = (props) => {
  const initialState = {
    left: 0,
    right: 0
  }


  const [clicks, setClicks] = useState(initialState)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left += 1
    }
    setAll(allClicks.concat("L"))
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right += 1
    }
    setAll(allClicks.concat("R"))
    setClicks(newClicks)
  }

  const handleResetClick = () => {

    setClicks(initialState)
    setAll([])
  }


  return (
    <>
      <Display counter={clicks.left} />
      <Display counter={clicks.right} />
      <History allClicks={allClicks} />
      <Button text={"left"} handleClick={handleLeftClick} />
      <Button text={"right"} handleClick={handleRightClick} />
      <Button text={"reset"} handleClick={handleResetClick} />
    </>
  )

}

export default App;
