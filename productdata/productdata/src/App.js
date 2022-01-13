import React from "react"
import { Switch, Route } from 'react-router-dom'

function App() {    
    return (
        <div>
            <h1>HELLO WORLD</h1>
            <Switch>
                <Route exact path="/"></Route>
                <Route exact path="/"></Route>
            </Switch>
        </div>
    )
}

export default App

