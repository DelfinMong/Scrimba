import React from "react"
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {    
    return (
        <div>
            <h1>HELLO WORLD</h1>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Switch>
                <Route exact path="/"></Route>
                <Route exact path="/"></Route>
            </Switch>
        </div>
    )
}

export default App

