import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../appContext'
import Search from './Search.js'

export default function DetailsPage(){
    const {
        selectedRecipe, 
        setSelectedRecipe,
        getRecipe,
        getRecipeTitle,
        newRecipe,
        getIngredients
    } = useContext(AppContext)



    return(
        <>
            <div className='detailswindow'>
                <div className='detail search searchBoxDisplay'>
                    <Search/> 
                </div>
                <div className='detail ingredientsDisplay'> Ingredients
                
                </div>
                <div className='detail instructionsDisplay'> Instructions </div>
                <div className='detail servingsDisplay'> Servings </div>
                <div className='detail readyTimeDisplay'> Ready In </div>
                <div className='detail healthRatingDisplay'> Health </div>
            </div>
                <Link to='/dashboard'> <button className='btns'> Cancel </button> </Link>
                <Link to='/dashboard'> <button className='btns'> Save </button> </Link>
        </>
    )
}