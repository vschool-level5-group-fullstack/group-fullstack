import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
// need to import Dashboard here for routing to dash from create account page
import {AppContext} from '../appContext'

export default function CreateAccount(){
    const {createNewUser, newUserInputs, setNewUserInputs} = useContext(AppContext)

    function handleChange(e){
        const {name, value} = e.target
        setNewUserInputs(prevInputs => ({...prevInputs, [name]: value}))
        console.log(newUserInputs)
    }

    function handleSubmit(e){
        e.preventDefault()
        createNewUser(newUserInputs)
    }

    return(
        <div className='createAccountContainer'>
            <i className="fas fa-user-circle" style={{fontSize: '260px', color: 'rgba(200, 16, 46, 1)'}}></i>
            <h2> Create New Account </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    First Name
                    <input required name='firstName' value={newUserInputs.firstName} onChange={handleChange} placeholder='First Name'></input>
                    Last Name
                    <input required name='lastName' value={newUserInputs.lastName} onChange={handleChange} placeholder='Last Name'></input>
                    E-Mail
                    <input required name='email' value={newUserInputs.email} onChange={handleChange} placeholder='E-Mail'></input>
                    Password
                    <input required name='password' type='password' value={newUserInputs.password} onChange={handleChange} placeholder='Password'></input>
                </div>
                    <input required type='checkbox' /> I agree to terms of service and privacy policy
                    <br/>
                    <Link to='/dashboard'> <button className='signUpBtn'> Sign Up </button> </Link>
            </form>
        </div>
    )
}