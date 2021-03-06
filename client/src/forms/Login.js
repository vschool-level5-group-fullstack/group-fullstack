import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AppContext } from '../appContext.js'


export default function Login(){
    // added for passing getUser the ID from user obj
    const [userID, setUserID] = useState('')
    // array for populating list of users at login
    const [userList, setUserList] = useState([])
    const { getUser } = useContext(AppContext)
    let history = useHistory()

    useEffect(() => {
        axios.get('users/list')
            .then(res => {
                setUserList(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    function handleChange(e){
        const {value} = e.target
        setUserID(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(userID.length > 0) {
        getUser(userID).then(
            history.push('/dashboard')
        )} else {
            alert('Please select a user')
        }
    }

    return( 
        <form className='loginContainer'>
            <h1> Select Profile </h1>
            <i className="fas fa-user-circle" style={{fontSize: '260px', color: 'rgba(200, 16, 46, 1)'}}></i>
            <select onChange={handleChange}>
                <option value=''> - Select Existing Account - </option>
                {userList.map(user => {
                    return <option value={user._id} key={user._id}> {user.firstName} {user.lastName} </option>
                })}
            </select>
            <button className='btns' onClick={handleSubmit}> Login </button>
            OR
            <br/>
            <Link to='/createAccount'> <button className='createAccBtn' > Create New Account </button> </Link>
        </form>
    )

}