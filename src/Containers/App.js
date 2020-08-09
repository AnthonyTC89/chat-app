import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as chatActions from '../redux/actions/chatActions';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setupSocket } = this.props;
    setupSocket();
  }

  handleClick(e) {
    e.preventDefault();
    const { socket } = this.props;
    if (socket) {
      socket.send(JSON.stringify({
        type: 'Hello',
        data: 'World',
      }));
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  setupSocket: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired,
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
