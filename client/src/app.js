import React from 'react'
import {}
import RecipeCard from './components/RecipeCard.js'
import Login from './forms/Login.js'
import CreateAccount from './forms/CreateAccount.js'
import Banner from './components/banner.js'
import Search from './components/Search.js'


export default function App(){
    return(
        <div>
            <Banner />
            <Search />
        </div>
    )
}