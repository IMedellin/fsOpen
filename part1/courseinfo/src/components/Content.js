import Header from "./Header"
import Part from "./Part"
import Total from "./Total"

const Content = (props) => {
  return (
    <>
      {props.courses.map(course => {
        return (
          <div key={course.id}>
            <Header courseName={course.name} />
            <Part courseParts={course.parts} />
            <Total courseParts={course.parts} />
          </div>
        )
      }
      )
      }
    </>
  )
}

export default Content
