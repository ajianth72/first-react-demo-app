import React, { useState } from 'react';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, college: uCollege, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;

