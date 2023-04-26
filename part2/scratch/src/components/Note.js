import "./styles/Note.css"

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important'
  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note


// if (note.important) {
//   return (
//     <li>{note.content} <em><span className="important">Important</span></em></li>
//   )
// }
// return (
//   <li>{note.content}</li>
// )