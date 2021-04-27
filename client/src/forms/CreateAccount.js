import React from 'react'
import { Link } from 'react-router-dom'
// need to import Dashboard here for routing to dash from create account page

export default function CreateAccount(){
    return(
        <div className='createAccountContainer'>
            <i className="fas fa-user-circle" style={{fontSize: '260px', color: 'rgba(200, 16, 46, 1)'}}></i>
            <h2> Create New Account </h2>
            <form>
                First Name
                <input placeholder='First Name'></input>
                Last Name
                <input placeholder='Last Name'></input>
                E-Mail
                <input placeholder='E-Mail'></input>
                Password
                <input placeholder='Password'></input>
            </form>
                <input type='checkbox'/> I agree to terms of service and privacy policy
                <Link className='signUpBtn' to='/dashboard'> Sign Up </Link>
        </div>
    )
}