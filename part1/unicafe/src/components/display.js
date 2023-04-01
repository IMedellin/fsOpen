const Display = (props) => {
  const { name, ratingNum, getAvg, getPercentage } = props;
  if (name === "Average") {
    if (!getAvg()) {
      return (
        <>
          <p>{name}: <strong>Average Reviews</strong></p>
        </>
      )
    }
    return (
      <>
        <p>{name} <strong>{getAvg()}</strong></p>
      </>
    )
  } else if (name === "Positive") {
    if (!getPercentage) {
      return (
        <>
          <p>{name}: <strong>Percentage of good reviews</strong></p>
        </>
      )
    } else {
      return (
        <>
          <p>{name} <strong>{getPercentage}</strong></p>
        </>
      )
    }
  }

  return (
    <>
      <p>{name} <strong>{ratingNum}</strong></p>
    </>
  )
}

export default Display