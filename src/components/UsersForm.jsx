import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'


const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  birthday: ''
}

const UsersForm = ({ getUsers, userSelected, deselectUsers }) => {

  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {

    if (userSelected) {
      reset(userSelected)
    } else {
      reset(initialValues);
    }
  }, [userSelected])


  const submit = (data) => {

    console.log(data);

    if (userSelected) {
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
        .then(() => {
          getUsers()
          deselectUsers();
        })
        .catch(error => console.log(error.reponse?.data))
    } else {

      axios.post('https://users-crud1.herokuapp.com/users/', data)
        .then(() => getUsers())
        .catch(error => console.log(error.response?.data))

    }

  }


  return (

    <form className='users-form'
      onSubmit={handleSubmit(submit)} action="">
      <div className='main_title'>
        <h1>Sing UP <span>Users</span></h1>
      </div>

      <div className='input-container'>
        <div>
          <label htmlFor="first_name">First name</label>
          <input {...register('first_name')} type="text"
            id='first_name'
            className='main-input'
          />
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input {...register('last_name')} type="last_name"
              className='main-input'
            />

          </div>


          <label htmlFor="email">Email</label>
          <input {...register('email')} type="email"
            className='main-input'
          />



          <label htmlFor="password">Password</label>
          <input {...register('password')} type="password"
            className='main-input'
          />



          <label htmlFor="birthday">Birthday</label>
          <input {...register('birthday')} type="date"
            className='main-input'
          />
        </div>
      </div>
      <div className='box-button'>
        <button className='button'>
          Submit
        </button>
      </div>
    </form>

  )

}

export default UsersForm