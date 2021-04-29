import React from 'react'
import {Switch, Route} from 'react-router-dom'

// for debugging
// import RecipeCard from './components/RecipeCard.js'
// 

import Login from './forms/Login.js'
import Dashboard from './components/Dashboard.js'
import CreateAccount from './forms/CreateAccount.js'
import Banner from './components/banner.js'


export default function App(){
    return(
        <>
            <Banner />
            <Switch>
                <Route exact path='/'>
                    <Login/>
                </Route>

                <Route path='/createAccount'>
                    <CreateAccount/>
                </Route>
                
                <Route path='/dashboard'>
                    <Dashboard/>
                </Route>
            </Switch>
        </>
    )
}