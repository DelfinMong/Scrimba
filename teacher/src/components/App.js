import React from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Header from './Header'
import Teacher from './Teachers'
import Course from './Courses'
import NotFound from './NotFound';


const App = () => (
  <BrowserRouter>
     <div className="container">
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          {/* <Route path='/about' render = { () => <About title='About'/>} /> */}
          <Route path='/teachers' component={Teacher} />
          <Route path='/courses' component={Course} />
          <Route component={NotFound} />
        </Switch>
    </div>
  </BrowserRouter>
 
);

export default App;

// render is use to pass down props.
// NavLink as a default class of active.
// NavLink exact 
// inline class ~ ~ activeClassName = 'activeActiveFace'
// inlice style ~ ~ activeStyle = {{background: 'red'}}
