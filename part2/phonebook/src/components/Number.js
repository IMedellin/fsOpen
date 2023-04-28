import phoneService from "../services/persons";


const Number = (props) => {
  const { name, number, handleContactDelete, id } = props

  return (
    <p>{name} {number} <button onClick={() => handleContactDelete(id)}>Delete Contact</button></p>
  )
}

export default Number;