import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'

const UserForm = ({ getUsers, userSelected, deselectUser }) => {
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    if (userSelected) {
      reset(userSelected)
    }
  }, [userSelected]);

  const submit = (data) => {
    if (userSelected) {
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
    } else {
      axios.post(`https://users-crud1.herokuapp.com/users/`, data)
        .then(() => getUsers())
        .catch((error) => console.log(error.response));
    }
    clear();
  }

  const clear = () => {
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: ""
    })
    deselectUser();
  }

  return (
    <div className='Container'>
      <form onSubmit={handleSubmit(submit)}>
        <h1>User Register</h1>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <div className="input-container">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id="first_name" {...register("first_name")} />
        </div>
        <div className="input-container">
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" id="last_name" {...register("last_name")} />
        </div>
        <div className="input-container">
          <label htmlFor="birthday">Birthday:</label>
          <input type="date" id="birthday" {...register("birthday")} />
        </div>
        <button>Submit</button>
        <button onClick={clear} type="button">Clear</button>
      </form>
    </div>
  );
};

export default UserForm;