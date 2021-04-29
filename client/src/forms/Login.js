import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../appContext'
// import userList from '../fake-data/user-list.js'
// need to import Dashboard here for routing to dash from login page

export default function Login(){
    const [user, setUser] = useState('')
    const [userList, setUserList] = useState([])
    const {getUser} = useContext(AppContext)

    useEffect(() => {
        axios.get('/users/list')
            .then(res => {
                console.log(res.data)
                setUserList(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    function handleChange(e){
        const {value} = e.target
        setUser(value)
        console.log(user)
    }

    return( 
        <div className='loginContainer'>
            {console.log(userList)}
            <h1> Select Profile </h1>
            <i className="fas fa-user-circle" style={{fontSize: '260px', color: 'rgba(200, 16, 46, 1)'}}></i>
            <select onChange={handleChange}>
                <option value=''> - Select Existing Account -</option>
                {userList.map(user => {
                    return <option value={user._id} key={user._id}> {user.firstName} {user.lastName} </option>
                })}
            </select>
            <Link to='/dashboard' onClick={getUser(user)}> Login </Link>
            <Link className='createAcctBtn' to='/createAccount'> Create New Account </Link>
        </div>
    )

}