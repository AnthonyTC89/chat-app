import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as chatActions from '../redux/actions/chatActions';
import Home from './Home';

const App = ({ setupSocket }) => {
  useEffect(() => {
    setupSocket();
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  setupSocket: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.session,
  ...state.chat,
});

const mapDispatchToProps = (dispatch) => ({
  setupSocket: () => {
    dispatch(chatActions.setupSocket());
  },
});

const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppWrapper;
