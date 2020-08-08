import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import store from '../redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
      <Redirect to="/" />
    </BrowserRouter>
  </Provider>
);

export default App;
