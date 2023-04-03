const Part = (props) => {
  const { courseParts } = props
  return (
    <>{
      courseParts.map(course => {
        return (
          <p key={course.id}>{course.name} {course.exercises}</p>
        )
      })
    }</>
  )
}

export default Part
