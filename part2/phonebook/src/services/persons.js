import axios from "axios"
const baseURL = "http://localhost:3001/persons"

const getAll = () => {
  return axios.get(baseURL)

}


const create = (newObject) => {
  return axios
    .post(baseURL, newObject)
}

const remove = (id) => {
  return axios
    .delete(`${baseURL}/${id}`)
    .then(res => console.log("deleted successfully"))
    .catch(err => console.error(err))
}

const phoneService = {
  getAll: getAll,
  create: create,
  remove, remove,
}


export default phoneService