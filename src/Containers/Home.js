import React from 'react';
import PropTypes from 'prop-types';
import Login from '../Components/Login';
import './Home.css';

const Home = ({ history }) => (
  <div className="container form-container">
    <div className="row form-row-custom">
      <Login history={history} />
    </div>
  </div>
);

Home.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Home;
