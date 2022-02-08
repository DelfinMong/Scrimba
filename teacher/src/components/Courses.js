import React from 'react';
import { NavLink, Route, Redirect  } from 'react-router-dom'

import HTML from './courses/HTML'
import CSS from './courses/CSS'
import JavaScript from './courses/JavaScript'

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <NavLink to='/courses/html'>HTML</NavLink>
        <NavLink to='/courses/css'>CSS</NavLink>
        <NavLink to='/courses/javascript'>JavaScript</NavLink>
      </ul>
      <Redirect to='/courses/html' />
      <Route path='/courses/html' component={HTML} />
      <Route path='/courses/css' component={CSS} />
      <Route path='/courses/javascript' component={JavaScript} />
    </div>
    
    {/* Write routes here... */}
  </div>
);

export default Courses;

// <Redirect to='/' /> requires a url to redirect to.
// <Redirect to='/' /> will redirect to the home component.