import "./styles/Note.css"

const Note = (props) => {
  const { note } = props

  if (note.important) {
    return (
      <li>{note.content} <em><span className="important">Important</span></em></li>
    )
  }
  return (
    <li>{note.content}</li>
  )
}

export default Note