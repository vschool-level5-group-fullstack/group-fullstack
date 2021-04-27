import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import {AppContextProvider} from './appContext.js'

ReactDOM.render(
    <AppContextProvider>
        <App/>
    </AppContextProvider>
    ,document.getElementById('root')
)