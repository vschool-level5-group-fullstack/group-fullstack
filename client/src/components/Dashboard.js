import React, {useContext} from 'react'
import RecipeCard from './RecipeCard.js'
import {AppContext} from '../appContext'


function Dashboard(){
    const {currentUser} = useContext(AppContext)
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const btnText = 'Edit'

    const recipeCardComponent = week.map((day) => {
        return(
            <div className="dashBoardCard">
                <h3>{day}</h3>
                <RecipeCard buttonText={btnText} />
            </div>
        )
    })



    return (
        <div className="dashBoard">
            {console.log(currentUser)}
            <div className="welcomeDiv">
                <h3 className="welcomeH3">Welcome back</h3>
                <h3>{currentUser.firstName},</h3>
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