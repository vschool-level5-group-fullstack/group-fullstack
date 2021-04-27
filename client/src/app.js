import React from 'react'
import {Switch, Route} from 'react-router-dom'

// for debugging
// import RecipeCard from './components/RecipeCard.js'
// 

import Login from './forms/Login.js'
import CreateAccount from './forms/CreateAccount.js'
import Banner from './components/banner.js'
import Search from './components/Search.js'


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
            {/* uncomment once imported */}
                {/* <Route path='/dashboard'>
                    <Dashboard/>
                </Route> */}
            </Switch>
        </>
    )
}