import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userList from '../fake-data/user-list.js'
// need to import Dashboard here for routing to dash from login page

export default function Login(){
    const [user, setUser] = useState({name:''})

    function handleChange(e){
        const {value} = e.target
        setUser({name:value})
    }

    return( 
        <div className='loginContainer'>
            {console.log(user)}
            <h1> Select Profile </h1>
            <i className="fas fa-user-circle" style={{fontSize: '260px', color: 'rgba(200, 16, 46, 1)'}}></i>
            <select onChange={handleChange}>
                <option value=''> - Select Existing Account -</option>
                {userList.map(user => {
                    return <option value={user.firstName} key={user.id}> {user.firstName} {user.lastName} </option>
                })}
            </select>
            {/* pass state info to dash and setup button/route to dash from login */}
            {/* <Link user={user} to='/dashboard'> <Dashboard/> </Link> */}
            <Link className='createAcctBtn' to='/createAccount'> Create New Account </Link>
        </div>
    )
}