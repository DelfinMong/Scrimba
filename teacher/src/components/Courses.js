import React from 'react';
import { Link,Route  } from 'react-router-dom'

import HTML from './courses/HTML'
import CSS from './courses/CSS'
import JavaScript from './courses/JavaScript'

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <Link to='/courses/html'>HTML</Link>
        <Link to='/courses/css'>CSS</Link>
        <Link to='/courses/javascript'>JavaScript</Link>
      </ul>

      <Route path='/' component={HTML} />
      <Route path='/' component={CSS} />
      <Route path='/' component={JavaScript} />
    </div>
    
    {/* Write routes here... */}
  </div>
);

export default Courses;