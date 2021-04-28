import React from 'react'
import RecipeCard from './RecipeCard.js'
import recipe from '../fake-data/recipe.js'

function Dashboard(){

    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    // const recipeCardComponent = 

    
    const btnText = 'Edit'

    const recipeCardComponent = week.map((day) => {
       return (
            <div className="dashBoardCard">
                <h3>{day}</h3>
                <RecipeCard buttonText={btnText} />
            </div>
       )
    })



    return (
        <div className="dashBoard">
            <div className="welcomeDiv">
                <h3 className="welcomeH3">Welcome back</h3>
                <h3>(First Name),</h3>
                <br />
                <h3>We hope you enjoy</h3>
                <h3>planning your</h3>
                <h3>dinners this week.</h3>
            </div>
            {recipeCardComponent}
        </div>
    )
}

export default Dashboard