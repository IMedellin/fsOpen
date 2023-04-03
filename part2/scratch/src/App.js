import Note from './components/Note'

//Hooks
import { useState } from 'react'
const App = (props) => {
  const { notesArray } = props

  const [notes, setNotes] = useState(notesArray)
  const [newNote, setNewNote] = useState(
    "Add Note"
  )
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault()
    const newNotes = [...notes,
    {
      id: notes.length + 1,
      content: newNote,
      important: Math.floor(Math.random() * 10) < 5
    }]
    setNotes(newNotes)
    setNewNote("")
  }

  const handleNoteChange = (e) => {
    let createNewNote = e.target.value
    setNewNote(createNewNote)
  }
  return (
    <div>
      <h1>Notes</h1>
      <label htmlFor="notesDropdown">Sort by:</label>
      <select onChange={() => setShowAll(!showAll)} name="notes" id="notesDropdown">
        <option>All</option>
        <option>Important</option>
      </select>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App