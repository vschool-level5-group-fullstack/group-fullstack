import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Banner from './components/banner.js'
import Login from './forms/Login.js'
import CreateAccount from './forms/CreateAccount.js'
import Dashboard from './components/Dashboard.js'
import DetailsPage from './components/DetailsPage.js'


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

                <Route path='/detailsPage'>
                    <DetailsPage/>
                </Route>
            </Switch>
        </>
    )
}