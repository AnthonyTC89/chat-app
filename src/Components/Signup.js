import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Signup.css';

const defaultUser = {
  username: '',
  email: '',
  password: '',
  confirmation: '',
};

const Signup = ({ handleComponent }) => {
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
      // const res = await axios.post('/api/users/login', user, { timeout: 5000 });
      setLoading(false);
      setUser(defaultUser);
    } catch (err) {
      setMessage('Error!');
      setLoading(false);
    }
  };

  return (
    <form className="form-signup" onSubmit={loading ? null : handleSubmit}>
      <h2 className="text-dark">Signup</h2>
      <input
        className="form-control input-signup"
        name="username"
        placeholder="username"
        value={user.username}
        onChange={handleChange}
        required
      />
      <input
        className="form-control input-signup"
        name="email"
        placeholder="email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <input
        className="form-control input-signup"
        name="password"
        type="password"
        placeholder="password"
        value={user.password}
        onChange={handleChange}
        required
      />
      <input
        className="form-control input-signup"
        name="confirmation"
        type="password"
        placeholder="password confirmation"
        value={user.confirmation}
        onChange={handleChange}
        required
      />
      <button className="btn btn-dark" type="submit" disabled={loading}>
        {loading
          ? <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />
          : null}
        {loading ? 'Wait...' : 'Sign up'}
      </button>
      <small className="text-danger">{message}</small>
      <div className="form-group">
        <button
          className="btn text-dark btn-link"
          type="button"
          onClick={handleComponent}
        >
          You already have an account, Login!
        </button>
      </div>
    </form>
  );
};

Signup.propTypes = {
  handleComponent: PropTypes.func.isRequired,
};

export default Signup;
