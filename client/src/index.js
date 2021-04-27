import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import {BrowserRouter as Router} from 'react-router-dom'
import {AppContextProvider} from './appContext'

ReactDOM.render(
    <Router>
        <AppContextProvider>
            <App/>
        </AppContextProvider>
    </Router>,
    document.getElementById('root')
)