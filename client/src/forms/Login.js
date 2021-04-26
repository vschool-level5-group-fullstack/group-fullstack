import React from 'react'
import userList from '../fake-data/user-list.js'

export default function Login(){
    return( 
        <div className='loginContainer'>
            <h1> Select Profile </h1>
            <i className="fas fa-user-circle" style={{fontSize: '260px', color: 'rgba(200, 16, 46, 1)'}}></i>
            <select>
                {userList.map(user => {
                    return <option key={user.id}> {user.firstName} {user.lastName} </option>
                })}
            </select>
            <h3> Create New Account </h3>
        </div>
    )
}