import React, {useContext, useState} from "react"
import { AppContext } from "../appContext"


function Search() {
    const {randomRecipeCall, randomRecipe, getIngredients} = useContext(AppContext)
    const [ingredients, setIngredients] = useState('')

    function getRandom(e) {
        e.preventDefault()
        randomRecipeCall()
        // for debugging
        console.log(randomRecipe)
    }

    function getSearch(e) {
        e.preventDefault()
        getIngredients(ingredients)
    }

        // ** review functionality **
    function handleChange(e) {
        const {value} = e.target
        setIngredients(value)
    }

    return(
        <div className='searchComp'>
                <input className='searchBarStyle'
                    type="text"
                    name="ingredients"
                    placeholder="Search By Ingredient"
                    value= {ingredients}
                    onChange={handleChange}
                    onSubmit={getSearch}
                />
                <i style={{fontSize:'20px',border: 'white solid 2px', padding: '8px', margin: '3px', borderRadius: '50%'}} className="fas fa-search"></i>
                <br/>
                <br/>
                OR
                <br/>
                <br/>
                <button style={{
                    color: 'white', 
                    backgroundColor: 'transparent', 
                    border: 'none', 
                    cursor: 'pointer'}}
                    onClick={getRandom}>
                        <i style={{
                            fontSize:'64px', 
                            color:'rgba(64, 171, 102, 1)'}} 
                            className="fas fa-dice-five"/>
                            CHOOSE RANDOM
                </button>
        </div>
    )
}

export default Search