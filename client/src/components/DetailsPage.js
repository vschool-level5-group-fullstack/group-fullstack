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
                {/* add ternary for display of data or icon */}
                <i class="fas fa-apple-alt"></i>
                <i class="fas fa-carrot"></i>
                </div>
                <div className='detail instructionsDisplay'> Instructions
                {/* add ternary for display of data or icon */}
                </div>
                <div className='detail servingsDisplay'> Servings 
                {/* add ternary for display of data or icon */}
                </div>
                <div className='detail readyTimeDisplay'> Ready In 
                {/* add ternary for display of data or icon */}
                </div>
                <div className='detail healthRatingDisplay'> Health
                {/* add ternary for display of data or icon */}
                <i class="fas fa-seedling"></i>
                </div>
                <div className='detailsBtnContainer'>
                    <Link to='/dashboard'> <button className='btns'> Cancel </button> </Link>
                    <Link to='/dashboard'> <button className='btns'> Save </button> </Link>
                </div>
            </div>
        </>
    )
}