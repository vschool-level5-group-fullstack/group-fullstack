import React from 'react'
import {Link} from 'react-router-dom'
import {AppContext} from '../appContext'
import Search from './Search.js'

export default function DetailsPage(){
    // import save functionality and random recipe info also search info
    return(
        <>
            <div className='detailswindow'>
                <div className='detail searchBoxDisplay'>
                    <Search/> 
                </div>
                <div className='detail ingredientsDisplay'> Ingredients </div>
                <div className='detail instructionsDisplay'> Instructions </div>
                <div className='detail servingsDisplay'> Servings </div>
                <div className='detail readyTimeDisplay'> Ready In </div>
                <div className='detail healthRatingDisplay'> Health </div>
            </div>
                <Link to='/dashboard'> <button className='detailsBtns'> Cancel </button> </Link>
                <Link to='/dashboard'> <button className='detailsBtns'> Save </button> </Link>
        </>
    )
}