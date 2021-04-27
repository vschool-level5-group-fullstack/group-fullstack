import React from 'react'
import recipe from '../fake-data/recipe.js'

// FOR FINAL
// switch props for recipe in (const and function arg) and add props
// switch button text into props destructor
export default function RecipeCard(props){
    const {title, image} = recipe
    const btnText = props.buttonText ? props.buttonText : 'Select'
    return(
        <div className='recipeCard'>
            <div className='recipeDisp' style={{background: `url(${image})`, backgroundSize: 'cover'}}>
                {/* <img alt='dinnerImg' src={image}/> */}
                <h3 className='title'> {title} </h3>
            </div>
            <button className='cardButton' onClick> {btnText} </button>
        </div>
    )
}