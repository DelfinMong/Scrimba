import React from 'react';
import { NavLink, Route, Redirect  } from 'react-router-dom'

import CourseContainer from './courses/CourseContainer'
import { CSSCourses, JSCourses, HTMLCourses } from '../data/courses'


const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <NavLink to={`${match.url}/html`}>HTML</NavLink>
        {/* <NavLink to={`${match.url}/css`} >CSS</NavLink> */}
        <NavLink to='/courses/css' >CSS</NavLink>
        <NavLink to={`${match.url}/javascript`}>JavaScript</NavLink>
      </ul>
     
      <Route exact path={match.path} render={ () => <Redirect to={`${match.url}/html`} />} />
      <Route path={`${match.path}/html`} render={ () => < CourseContainer data={HTMLCourses}/>} />
      {/* <Route path={`${match.path}/css`} component={CSS} /> */}
      <Route path='/courses/css' render={ () => < CourseContainer data={CSSCourses}/>} />
      <Route path={`${match.path}/javascript`} render={ () => < CourseContainer data={JSCourses}/>} />
    </div>
    
    {/* Write routes here... */}
  </div>
);

export default Courses;

// <Redirect to='/' /> requires a url to redirect to.
// <Redirect to='/' /> will redirect to the home component.

// we can change courses dynamatically without breaking the code.
// path - (string) The path pattern used to match. Useful for building nested <Route>s
// url - (string) The matched portion of the URL. Useful for building nested <Link>s