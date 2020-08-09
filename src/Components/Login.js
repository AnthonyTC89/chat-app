import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Login.css';

const defaultUser = {
  email: '',
  password: '',
};

const Login = ({ handleComponent, socket }) => {
  const [user, setUser] = useState(defaultUser);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    e.persist();
    setUser((prev) => (
      { ...prev, [e.target.name]: e.target.value }
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      if (socket) {
        socket.send(JSON.stringify({
          type: 'LOGIN',
          data: { ...user },
        }));
      }
      // const res = await axios.post('/api/users/login', user, { timeout: 5000 });
      setLoading(false);
      setUser(defaultUser);
    } catch (err) {
      setMessage('Error!');
      setLoading(false);
    }
  };

  return (
    <form className="form-login" onSubmit={loading ? null : handleSubmit}>
      <h2 className="text-dark">Login</h2>
      <input
        className="form-control input-login"
        name="email"
        placeholder="email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <input
        className="form-control input-login"
        name="password"
        type="password"
        placeholder="password"
        value={user.password}
        onChange={handleChange}
        required
      />
      <button className="btn btn-dark" type="submit" disabled={loading}>
        {loading
          ? <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />
          : null}
        {loading ? 'Wait...' : 'Login'}
      </button>
      <small className="text-danger">{message}</small>
      <div className="form-group">
        <button
          className="btn text-dark btn-link"
          type="button"
          onClick={handleComponent}
        >
          Don&apos;t have and account, Sign up!
        </button>
      </div>
    </form>
  );
};

Login.propTypes = {
  handleComponent: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.session,
  ...state.chat,
});

const LoginWrapper = connect(mapStateToProps, null)(Login);

export default LoginWrapper;
