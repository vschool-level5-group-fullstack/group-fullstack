import React, {useState} from "react"

const AppContext = React.createContext()


function AppContextProvider(props) {

    const [selectedRecipe, setSelectedRecipe] = useState({})
    const [userList, setUserList] = useState([])
    const [randomRecipe, setRandomRecipe] = useState({})
    

    //api call
    function getUsers() {

    }

    //api call
    function getRecipe() {

    }
    
    //api call
    function getRandomRecipe() {

    }


    
    return (
        <AppContext.Provider value={{getRecipe}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}