
import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './pages/contact';
import About from './pages/about';
import Main from './pages/main';

const Routes = () => (
  <BrowserRouter> 
    <Switch>
      <Route path='/' component={Main} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </Switch>
  </BrowserRouter>
);

export default Routes;