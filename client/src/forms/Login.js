import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../appContext.js'


export default function Login(){
    // added for passing getUser the ID from user obj
    const [userID, setUserID] = useState('')
    // array for populating list of users at login
    const [userList, setUserList] = useState([])

    const {getUser, currentUser} = useContext(AppContext)

    useEffect(() => {
        axios.get('users/list')
            .then(res => {
                console.log(res.data)
                setUserList(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    function handleChange(e){
        const {value} = e.target
        setUserID(value)
    }

    function handleSubmit(e){
        e.preventDefault()
        // in theory, passes userID to getUser for GET request in context
        getUser(userID)
        // but currentUser is not returning anything upon submit
    }

    return( 
        <form onSubmit={handleSubmit} className='loginContainer'>
            {console.log(userID)}
            <h1> Select Profile </h1>
            <i className="fas fa-user-circle" style={{fontSize: '260px', color: 'rgba(200, 16, 46, 1)'}}></i>
            <select onChange={handleChange}>
                <option value=''> - Select Existing Account - </option>
                {userList.map(user => {
                    return <option value={user._id} key={user._id}> {user.firstName} {user.lastName} </option>
                })}
            </select>
            <Link className='loginBtn' to='/dashboard'> <button> Login </button>  </Link>
            OR
            <br/>
            <Link className='createAcctBtn' to='/createAccount'> <button> Create New Account </button> </Link>
        </form>
    )

}