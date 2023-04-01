import "../componentsStyles/display.css"

const StatisticLine = (props) => {
  const { name, ratingNum, getAvg, getPercentage } = props;

  if (name === "Average") {
    if (!getAvg()) {
      return (
        <>
          <p>{name}: <strong>0</strong></p>
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
          <p>{name}: <strong>0%</strong></p>
        </>
      )
    } else {
      return (
        <>
          <p>{name} <strong>{getPercentage}%</strong></p>
        </>
      )
    }
  }
  return (
    <>
      <h4>{name}: {ratingNum}</h4>
    </>
  )
}

export default StatisticLine