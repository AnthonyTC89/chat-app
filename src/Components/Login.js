import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import updateSession from '../redux/actions/updateSession';
import './Login.css';

const defaultUser = {
  username: '',
  email: '',
};

const Login = ({ history, changeSession }) => {
  const [user, setUser] = useState(defaultUser);

  const handleChange = (e) => {
    e.persist();
    setUser((prev) => (
      { ...prev, [e.target.name]: e.target.value }
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    changeSession(user);
    setUser(defaultUser);
    history.push('/messenger');
  };

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <h2 className="text-dark">Login</h2>
      <input
        className="form-control input-login"
        name="username"
        placeholder="username"
        value={user.username}
        onChange={handleChange}
        required
      />
      <input
        className="form-control input-login"
        name="email"
        placeholder="email"
        value={user.email}
        onChange={handleChange}
      />
      <button className="btn btn-dark" type="submit">
        Login
      </button>
    </form>
  );
};

Login.propTypes = {
  history: PropTypes.object.isRequired,
  changeSession: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.session,
});

const mapDispatchToProps = (dispatch) => ({
  changeSession: (user) => dispatch(updateSession(user)),
});

const LoginWrapper = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginWrapper;
