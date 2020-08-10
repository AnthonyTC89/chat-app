import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import './Messenger.css';

const Messenger = ({ history }) => {
  // eslint-disable-next-line no-unused-vars
  const [socket, setSocket] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const handleLogout = () => {
    history.push('/');
  };

  const handleChange = (e) => {
    e.persist();
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, text]);
    setText('');
  };

  useEffect(() => {
    setSocket(io('/'));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container container-messenger">
      <div className="row header-messenger">
        <div>
          <span>Username</span>
        </div>
        <div>
          <h3>Public Chat</h3>
        </div>
        <button type="button" className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="row messages-list">
        {messages.map((msg) => (
          <div className="col-12 message">
            <p>{msg}</p>
          </div>
        ))}
      </div>
      <div className="row input-row">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control"
            name="text"
            placeholder="text"
            value={text}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
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
