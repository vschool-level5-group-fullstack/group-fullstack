import React, { useEffect, useState, useContext} from 'react';
import RecipeCard from './RecipeCard.js';
import {AppContext} from '../appContext';

import date from 'date-and-time';


const Dashboard = () => {
    const {currentUser} = useContext(AppContext)
    // const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    const [day, setDay] = useState('')

    const now = new Date();
    const thisWeek = []

    const btnText = 'EDIT'

    function getWeekDays(num){
        const next = date.addDays(now, +num)
        return date.format(next, 'dddd')
    }
    
    for(let i = 0; i <= 6; i++){
        const weeklyDays = getWeekDays(i)
        thisWeek.push(weeklyDays)
    }

    function findDay(){
        return setDay(date.format(now, 'dddd'))
    }   

    const recipeCardComponent = thisWeek.map(day => {
        return(
            <div className="dashBoardCard">
                <h3> {day} </h3>
                <RecipeCard buttonText={btnText} />
            </div>
        )
    })

    useEffect(() => {
        findDay()
    },[])

    return (
        <div className="dashBoard">
            <div className="welcomeDiv">
                <h2 className="welcomeH3">Welcome back <br/> {currentUser.firstName}!</h2>
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