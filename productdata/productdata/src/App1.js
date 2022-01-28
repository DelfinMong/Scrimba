import React from "react"
import Home from './pages/Home'
import Header1 from "./components/Header1"
import Footer from "./components/Footer"
import Profile from "./pages/profile/Profile"


import {Switch, Route} from "react-router-dom"

function App() {  
   
    return (
        <div> 
            <Header1 /> 
             <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/user">
                    <Profile />
                </Route>
            </Switch> 
          <Footer />
        </div>
    )
}

export default App

