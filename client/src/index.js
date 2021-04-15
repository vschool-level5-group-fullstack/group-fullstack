import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import {AppContextProvider} from './client/appContext'

ReactDOM.render(
    <AppContextProvider>
        <App/>
    </AppContextProvider>
    ,document.getElementById('root')
)