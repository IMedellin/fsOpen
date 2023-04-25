import { useState, useEffect } from 'react'
import axios from "axios"
import Number from './components/Number'

const App = () => {
  const [persons, setPersons] = useState([])


  useEffect(() => {
    let ignore = false
    axios
      .get("http://localhost:3001/persons")
      .then(res => {
        const data = res.data;
        setPersons(data)
      })
    return () => {
      ignore = true
    }
  }, [])


  //State of Application
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')



  const handleFilter = (e) => {
    let name = e.target.value
    setFilter(name)
  }


  const namesArray = persons.map(person => person.name)
  const filterContacts = namesArray.includes(filter) ? persons.filter(person => person.name.toLowerCase() === filter.toLowerCase()) : persons

  //Name helper functions
  const checkDuplicate = (name, number) => {
    let ifExists;
    persons.map(person => {
      if (person.name === name || person.number === number) {
        ifExists = true
      } else {
        ifExists = false
      }

    })
    return ifExists
  }
  const handleName = (e) => {
    let name = e.target.value
    setNewName(name)
  }

  //Phone Number helper functions
  const handleNumber = (e) => {
    let phoneNum = e.target.value
    setNewNumber(phoneNum)
  }


  //Form submitting 
  const submitForm = (e) => {
    e.preventDefault()
    if (!newName || !newNumber) {
      alert("Please enter name and number")
      return
    }
    const newPerson = {
      id: Math.floor(Math.random() * 100000),
      name: newName,
      number: newNumber
    }
    if (checkDuplicate(newPerson.name, newPerson.number)) {
      alert(`${e.target[0].value} already exists in the phonebook`)
      return
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Filter: <input onChange={handleFilter} value={filter} />
      </div>
      <h2>Add Number</h2>
      <form onSubmit={submitForm}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      <div>
        {filterContacts.map(person => {
          return <Number name={person.name} number={person.number} key={person.id} />
        })}
      </div>
    </div>
  )
}

export default App