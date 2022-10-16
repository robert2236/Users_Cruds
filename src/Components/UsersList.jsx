import axios from 'axios';
import React from 'react';

const UsersList = ({users, selectUser, getUsers}) => {
  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then((res) => {
      console.log(res);
      getUsers()
    })
  }

  return (
    <div className='List'>
    <h1>User List</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <div className='ListContainer'>
          <div>
          <b>Email: </b>
          {user.email}
          </div>
       
          <div>
            <b>First Name: </b>
            {user.first_name}
          </div>
          <div>
            <b>Last Name: </b>
            {user.last_name}
          </div>
          <div>
            <b>Birthday: </b>
            {user.birthday}
          </div>
          <button onClick={() => selectUser(user)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
};


export default UsersList;