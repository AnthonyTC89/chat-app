import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import updateChat from '../redux/actions/updateChat';
import './Messenger.css';

const Messenger = ({ history, chat, changeChat }) => {
  // eslint-disable-next-line no-unused-vars
  const [socket, setSocket] = useState({});
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
    // const body = { text, from: 'me' };
    socket.emit('message', text);
    changeChat(text);
    setText('');
  };

  useEffect(() => {
    const newSocket = io('/');
    setSocket(newSocket);
    newSocket.on('message', (body) => {
      console.log('body: ', body);
      changeChat(body);
    });
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
        {console.log('chat: ', chat)}
        {chat.map((msg) => (
          <div className={msg ? 'col-12 own-message' : 'col-12 message'}>
            {msg ? null : <small>{msg.username}</small>}
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
  chat: PropTypes.array.isRequired,
  changeChat: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  chat: state.chat,
});

const mapDispatchToProps = (dispatch) => ({
  changeChat: (message) => dispatch(updateChat(message)),
});

const MessengerWrapper = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerWrapper;
