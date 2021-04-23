import React, {useContext, useState} from "react"
import { AppContext } from "../appContext"


function Search(props) {
    const {randomRecipeCall, getIngredients} = useContext(AppContext)
    const [ingredients, setIngredients] = useState('')

    function getRandom(e) {
        e.preventDefault()
        randomRecipeCall()
    }

    function getSearch(e) {
        e.preventDefault()
        getIngredients(ingredients)
    }

    function handleChange(e) {
        const {name, value} = e.target
        setIngredients(value)
     }

    return(
        <div>
            <form>
                <input
                    type="text"
                    name="ingredients"
                    placeholder="enter ingredients here"
                    value= {ingredients}
                    onChange={handleChange}
                />
                <button onClick={getSearch}>Search Ingredients</button>
                <br/>
                <button onClick={getRandom}>CHOOSE RANDOM</button>
            </form>
        </div>
    )
}

export default Search

