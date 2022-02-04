import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './Home'

const App = () => (
  <BrowserRouter>
     <div className="container">
      <Route path='/' component={Home} />
     </div>
  </BrowserRouter>
 
);

export default App;