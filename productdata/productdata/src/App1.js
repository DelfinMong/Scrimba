import React from "react"
import Home from './pages/Home'
import Header1 from "./components/Header1"
import Footer from "./components/Footer"
import Profile from "./pages/profile/Profile"
import Setting from "../src/pages/profile/Settings"
import Info from "../src/pages/profile/Info"

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            hELLO
            <Header1 /> 
             <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route path='/profile/info'>
                    <Info />
                </Route>
                <Route path='/profile/settings'>
                    <Setting />
                </Route>
            </Switch> 
          <Footer />
        </div>
    )
}

export default App