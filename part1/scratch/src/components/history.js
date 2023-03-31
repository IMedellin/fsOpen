
const History = (props) => {
  const { allClicks } = props

  // if (allClicks.length === 0) {
  //   return (
  //     <p>Click a button</p>
  //   )
  // } else {
  //   <p>{allClicks.join("")}<br></br>
  //     You clicked {allClicks.length} times
  //   </p>
  // }

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