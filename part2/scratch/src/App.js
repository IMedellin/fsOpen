//dependencies
import axios from 'axios'
//components
import Note from './components/Note'
//Hooks
import { useState, useEffect } from 'react'

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(
    "Add Note"
  )
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    let ignore = false;
    axios
      .get("http://localhost:3001/notes")
      .then(res => {
        if (!ignore) {
          const notes = res.data
          setNotes(notes)
        }
      })
    return () => {
      ignore = true;
    }
  }, [])



  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault()
    const newNotes =
    {
      content: newNote,
      important: Math.floor(Math.random() * 10) < 5
    }

    axios
      .post("http://localhost:3001/notes", newNotes)
      .then(res => {
        console.log(res.data)
        setNotes(notes.concat(res.data))
        setNewNote("")
      })
      .catch(err => console.error(err))
  }


  const handleNoteChange = (e) => {
    let createNewNote = e.target.value
    setNewNote(createNewNote)
  }


  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    axios
      .put(url, changedNote)
      .then(res => {
        setNotes(notes.map(n => n.id !== id ? n : res.data))
      })
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
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
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