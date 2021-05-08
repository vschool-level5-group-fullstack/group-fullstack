import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../appContext.js'

import recipe from '../fake-data/recipe.js'

// FOR FINAL
// figure out conditional for btnText render; between select and edit
export default function RecipeCard(props){
    const { selectedRecipe, setSelectedRecipe, randomRecipe, setRandomRecipe } = useContext(AppContext)
    const { title, image } = recipe
    const btnText = props.buttonText ? props.buttonText : 'SELECT'

    return(
        // this is the view for if recipe is selected, figure out how to setup conditional render of
        // additional card view for days with unselected recipes
        <div className='recipeCard'>
            <div className='recipeDisp' style={{background: `url(${image})`, backgroundSize: 'cover'}}>
                <h3 className='title'> {title} </h3>
            </div>
            <Link to='/detailsPage'> <button className='btns' > {btnText} </button> </Link>
        </div>
    )
}