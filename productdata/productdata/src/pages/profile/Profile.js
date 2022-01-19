import React from "react"
import { Link} from "react-router-dom"


function Profile() {
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to="/profile/info">Profile Info</Link></li>
                <li><Link to="/profile/settings">Profile Settings</Link></li>
            </ul>
            {/* <switch>
                <Route path='/profile/info'>
                    <Info />
                </Route>
                <Route path='/profile/settings'>
                    <Setting />
                </Route>
            </switch> */}
        </div>
    )
}

export default Profile