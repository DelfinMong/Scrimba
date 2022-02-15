import React from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom'

import Home from './Home'



const App = () => (
  <BrowserRouter>
     <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
        
        </Switch>
    </div>
  </BrowserRouter>
 
);

export default App;


