import StatisticLine from "./statisticLine";
import "../componentsStyles/display.css"

const Display = (props) => {
  const { good, neutral, bad } = props;

  const getAvg = (g = good, b = bad) => {
    const handler = () => {
      let total = good + bad + neutral
      return ((g - b) / total) * 100

    }
    return handler
  }

  const getPercentage = () => {
    let total = good + bad + neutral
    return Math.floor((good / total) * 100)
  }



  return (
    <table>
      <tr>
        <StatisticLine name={"Good"} ratingNum={good} />
      </tr>
      <tr>
        <StatisticLine name={"Neutral"} ratingNum={neutral} />
      </tr>
      <tr>
        <StatisticLine name={"Bad"} ratingNum={bad} />
      </tr>
      <tr>
        <StatisticLine name={"All"} ratingNum={good + bad + neutral} />
      </tr>
      <tr>
        <StatisticLine name={"Average"} getAvg={getAvg(good, bad)} />
      </tr>
      <tr>
        <StatisticLine name={"Positive"} getPercentage={getPercentage()} />
      </tr>
    </table >
  )
}

export default Display