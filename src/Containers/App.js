import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as chatActions from '../redux/actions/chatActions';
import Home from './Home';
import Login from './Login';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  componentDidMount() {
    const { setupSocket } = this.props;
    setupSocket();
  }

  handleClick(e) {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    const { socket } = this.props;
    if (socket) {
      // eslint-disable-next-line react/prop-types
      socket.send({
        type: 'Hello',
        data: 'World',
      });
    }
  }

  render() {
    return (
      <div>
        {/* <button type="button" onClick={this.handleClick}>
          Send Message
        </button> */}
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/" component={Home} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

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
