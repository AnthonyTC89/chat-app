import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import updateChat from '../redux/actions/updateChat';
import Gravatar from '../Components/Gravatar';
import './Messenger.css';

const Messenger = ({ history, chat, changeChat, session }) => {
  const [socket, setSocket] = useState(null);
  const [text, setText] = useState('');

  const handleLogout = () => {
    if (socket) {
      socket.close();
    }
    changeChat(null);
    history.push('/');
  };

  const handleChange = (e) => {
    e.persist();
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = { text, from: session.user.username };
    setText('');
    socket.emit('message', message);
    changeChat(message);
  };

  useEffect(() => {
    if (!session.isLoggedIn) {
      handleLogout();
      return;
    }
    const newSocket = io('/');
    setSocket(newSocket);
    newSocket.on('message', (message) => {
      changeChat(message);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container container-messenger">
      <div className="row header-messenger">
        <div className="header-user">
          <Gravatar user={session.user} />
          <span>{session.user.username}</span>
        </div>
        <div>
          <h3>Public Chat</h3>
        </div>
        <div className="header-logout">
          <button type="button" className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="row messages-list">
        {chat.map((message) => (
          <div
            className={message.from === session.user.username
              ? 'own-message' : 'message'}
          >
            <div>
              <small className="message-from">{message.from}</small>
            </div>
            <span className="message-text">{message.text}</span>
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
          <button type="submit" className="btn btn-success">
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
  session: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  chat: state.chat,
  session: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  changeChat: (message) => dispatch(updateChat(message)),
});

const MessengerWrapper = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerWrapper;
