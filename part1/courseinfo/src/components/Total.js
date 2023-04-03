const Total = (props) => {

  const { courseParts } = props

  let total = () => {
    return courseParts.reduce((acc, obj) => {
      return acc + obj.exercises
    }, 0)
  }
  return (
    <p>{total()}</p>
  )

}

export default Total 