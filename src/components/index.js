import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home.jsx';
import Second from './Second';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sec" component={Second} />
    </Switch>
  </BrowserRouter>
)
