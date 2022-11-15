import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import UserList from './components/UsersList'
import UsersForm from './components/UsersForm'
import Header from './components/Header'
import Datapng from './assets/pictures/Datapng.png';

function App() {
  const [usersList, setUsersList] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsersList(res.data))
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsersList(res.data))
  }

  const selectUsers = (user) => { //Esta pelicula solo puede vivir aqui adrentro por el scope,
    //para sacarla se necesita un estado y ese estado pasarlo por props
    setUserSelected(user)
  }

  const deselectUsers = () => setUserSelected(null);

  const deleteUsers = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  }

  return (
    <div className="App">
      <div className='main'>
        <img src={Datapng} alt="" className='main_img' />
      

        <UsersForm
          getUsers={getUsers}
          userSelected={userSelected}
          deselectUsers={deselectUsers}
        />

        <UserList
          usersList={usersList}
          selectUsers={selectUsers}
          deleteUsers={deleteUsers}


        />

      </div>

    </div>
  )
}

export default App
