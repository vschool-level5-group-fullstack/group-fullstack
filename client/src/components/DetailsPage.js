import React from 'react'
import {AppContext} from '../appContext'
import Search from './Search.js'

export default function DetailsPage(){

    return(
        <>
            <div className='detailswindow'>
                <div className='searchBoxDisplay'>
                    <Search/> 
                </div>
                <div className='ingredientsDisplay'> </div>
                <div className='instructionsDisplay'> </div>
                <div className='servingsDisplay'> </div>
                <div className='readyTimeDisplay'> </div>
                <div className='healthRatingDisplay'> </div>
            </div>
        </>
    )
}