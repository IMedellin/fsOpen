//Hooks
import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './components/Display';


function App() {
  const [input, setInput] = useState('')
  const [getAll, setGetAll] = useState([])
  const filterRegex = new RegExp(`(${input})+`, "gi")

  useEffect(() => {
    let ignore = false;
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then(res => {
        if (!ignore) {
          setGetAll(res.data)
        }
      })
      .catch(err => console.error(err))
    return () => {
      ignore = true;
    }
  }, [])

  const handleOne = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const countries = getAll.map(country => country) //A new array containing all countries. does not affect state

  const filteredCountry = countries.filter(country => {
    let name = country.name.common;
    return name.match(filterRegex)
  })



  return (
    <div className="App">
      <form>
        Find a country:
        <input onChange={handleOne} value={input}></input>
      </form>
      {filteredCountry.length > 10 && input ?
        <p>Too many countries, please specify</p> :
        <Display filteredCountry={filteredCountry} />}
    </div>
  );
}

export default App;
