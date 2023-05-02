import "../styles/AddContact.css"

const AddContact = ({ message }) => {

  if (!message) {
    return (
      <>
        <p>{message}</p>
      </>
    )
  }

  return (
    <>
      <p className="addContact">{message}</p>
    </>
  )
}

export default AddContact