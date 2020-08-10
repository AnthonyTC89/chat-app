import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import './Home.css';

const Home = ({ history }) => {
  const [showLogin, setshowLogin] = useState(true);

  const handleComponent = () => {
    setshowLogin(!showLogin);
  };

  return (
    <div className="container form-container">
      <div className="row form-row-custom">
        {showLogin ? <Login handleComponent={handleComponent} history={history} />
          : <Signup handleComponent={handleComponent} history={history} />}
      </div>
    </div>
  );
};

Home.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Home;
