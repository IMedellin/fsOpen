
const History = (props) => {
  const { allClicks } = props
  const ifEmpty = () => {
    return (allClicks.length === 0 ?
      <p>Please click a button</p> :
      <p>{allClicks.join("")}<br></br>
        You clicked {allClicks.length} times
      </p>
    )
  }

  return (
    <>
      {ifEmpty()}
    </>
  )
}

export default History