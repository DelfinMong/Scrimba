import React from "react"
import {Link} from "react-router-dom"

function Header1() {
    return (
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </header>
    )
}

export default Header1