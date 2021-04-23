import React, {useState} from "react"
import axios from 'axios'


const AppContext = React.createContext()


function AppContextProvider(props) {

    const apiKey = "?apiKey=481185a2b3d040398c8a073bdbaf2c54"

    const [selectedRecipe, setSelectedRecipe] = useState([])
    const [userList, setUserList] = useState([])
    const [randomRecipe, setRandomRecipe] = useState([])


    //api call
    function getUsers() {

    }

    //api call
    function getIngredients(ingredients) {
        const queryString = ingredients.split(' ').join(',+')
        axios.get(`https://api.spoonacular.com/recipes/findByIngredients${apiKey}&ingredients=${queryString}`)
        .then(res => {
            console.log(res.data)
            setSelectedRecipe([...res.data])
         })
            .catch(err => console.log(err))
    }
    
    //api call
    function randomRecipeCall() {
        axios.get(`https://api.spoonacular.com/recipes/random${apiKey}`)
            .then(res => {
                setRandomRecipe(prevRandomRecipe => [...prevRandomRecipe, res.data])
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
=


    return (
        <AppContext.Provider value={{getIngredients, randomRecipeCall, selectedRecipe, randomRecipe}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}

/*
1. The user will enter a the ingredients into the search box, and you will receive it as a string.
2. Take that string and convert/parse it to the following format: 
 let queryString = INGREDIENT_1,+INGREDIENT_2,+INGREDIENT_3  {depending on how many ingredients passed)
3. Add that string (save it to a variable as shown above) to the GET request URL: 
`https://api.spoonacular.com/recipes/findByIngredients?apiKey=API_KEY_GOES_HERE&ingredients=${queryString}&num=NUM_OF_RECIPES_TO_SHOW
*/