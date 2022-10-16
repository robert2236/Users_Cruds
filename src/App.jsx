import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserForm from './Components/UserForm'
import { useEffect } from 'react'
import axios from 'axios'
import UsersList from './Components/UsersList'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([]);
  const [ userSelected, setUserSelected ] = useState(null)

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then((res) => setUsers(res.data))
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then((res) => setUsers(res.data))
  }

  const selectUser = (user) => {
    setUserSelected(user);
  };
  const deselectUser = () => setUserSelected(null)

  return (
    <div className="App">
      <UserForm getUsers = {getUsers} userSelected = {userSelected} deselectUser = {deselectUser} />
      <UsersList selectUser = {selectUser} users = {users} getUsers = {getUsers} />
    </div>
  )
}

export default App
