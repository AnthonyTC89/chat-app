import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Messenger from './Messenger';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/messenger" component={Messenger} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
