import React, { useRef, useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrappers from '../Helpers/Wrappers';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');
  const [enteredUserCollege, setEnteredUserCollege] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredUserCollege.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name, age, and college (non-empty values).',
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge, enteredUserCollege);
    setEnteredUserName('');
    setEnteredUserAge('');
    setEnteredUserCollege('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userageChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const usercollegeChangeHandler = (event) => {
    setEnteredUserCollege(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrappers>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserAge}
            onChange={userageChangeHandler}
            ref={ageInputRef}
          />
          <label htmlFor="college">College</label>
          <input
            id="college"
            type="text"
            value={enteredUserCollege}
            onChange={usercollegeChangeHandler}
            ref={collegeInputRef}
          />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </Wrappers>
  );
};

export default AddUser;




