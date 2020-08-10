import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import io from 'socket.io-client';

const Messenger = ({ history }) => {
  // eslint-disable-next-line no-unused-vars
  const [socket, setSocket] = useState({});

  const handleLogout = () => {
    history.push('/');
  };

  useEffect(() => {
    const socketIO = io('/');
    console.log(socketIO);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <button type="button" className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
      Messenger
    </div>
  );
};

Messenger.propTypes = {
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.session,
});

const MessengerWrapper = connect(mapStateToProps, null)(Messenger);

export default MessengerWrapper;
