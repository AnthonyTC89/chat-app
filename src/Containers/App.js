import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>
);

const mapStateToProps = (state) => ({
  session: state.session,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({

});

const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppWrapper;
