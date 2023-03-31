const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props.parts)
  return (
    <div>
      <Part name={props.parts[0]} />
      <Part name={props.parts[1]} />
      <Part name={props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>{props.name.name} has {props.name.exercises} exercises</p>
  )
}



const Total = (props) => {
  return (
    <div>
      Total component here
    </div>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div className="App">
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total />
      </div>
    </div>
  );
}

export default App;
