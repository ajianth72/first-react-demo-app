import React from 'react';
import { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Wrappers from '../Helpers/Wrappers';
import ErrorModal from '../UI/ErrorModal';

const AddUser=(props)=>{
    const [enteredUserName ,setEnteredUserName]=useState('');
    const [enteredUserAge,setEnteredUserAge]=useState('');
    const [error,setError]=useState();

    
    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length===0 || enteredUserAge.trim().length===0){
            setError({
                title :'Invalid input',
                massage:'Please enter a valid name and age (non-empty values).'
            });
            return ;
        }
        if(+enteredUserAge <1){
            setError({
                title :'Invalid age',
                massage:'please enter a valid age (>0).'
            });
            return ;
        }
        props.onAddUser(enteredUserName,enteredUserAge);
        setEnteredUserName('');
        setEnteredUserAge('');
    };

    const usernameChangeHandler=(event)=>{
        setEnteredUserName(event.target.value);
    }

    const userageChangeHandler=(event)=>{
        setEnteredUserAge(event.target.value)
    }
    const errorHandler=()=>{
        setError(null);
    }
    

    return (
        <Wrappers>
        {error&&<ErrorModal title={error.title} massage ={error.massage} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form action="" onSubmit={addUserHandler}>
            <label htmlFor="usename">Username</label>
            <input id='username' type="text" value={enteredUserName} onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age (Years)</label>
            <input id='age' type="number" value={enteredUserAge} onChange={userageChangeHandler}/>
            <button type='submit'>Add User</button>
        </form>
        </Card>

        </Wrappers>
    )

    }

export default AddUser;



