import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Profile from "./pages/profile/Profile"
import Home from './pages/Home'
import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            Hello
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
            </Switch>
            
            <Footer />
        </div>
    )
}

export default App

