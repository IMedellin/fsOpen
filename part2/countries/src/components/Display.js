import DisplayCountry from "./DisplayCountry"
import { useState } from "react"

const Display = (props) => {

  const [viewCountry, setViewCountry] = useState(false)
  const { filteredCountry } = props
  console.log(filteredCountry);




  // const showCountry = (e) => {
  //   console.log(e.target)
  //   setViewCountry(true)
  // }

  // if (filteredCountry.length > 1 && filteredCountry.length <= 10) {
  //   return (
  //     filteredCountry.map(country => {
  //       country.id = Math.floor((Math.random() * 25000))
  //       return (
  //         <>
  //           <p key={country.ccn3}>{country.name.common} <button id={country.name.common} onClick={showCountry}>Show</button></p>
  //         </>
  //       )
  //     })
  //   )
  // }
  //  else 
  if (filteredCountry.length === 1) {
    return (
      <DisplayCountry country={filteredCountry} />
    )
  }

}


export default Display