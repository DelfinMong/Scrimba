import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Header from './Header'
import Teacher from './Teachers'
import Course from './Courses'

const App = () => (
  <BrowserRouter>
     <div className="container">
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/teachers' component={Teacher} />
      <Route path='/courses' component={Course} />
     </div>
  </BrowserRouter>
 
);

export default App;