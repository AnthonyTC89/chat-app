import React, { useState } from 'react';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import './Home.css';

const Home = () => {
  const [showLogin, setshowLogin] = useState(true);

  const handleComponent = () => {
    setshowLogin(!showLogin);
  };

  return (
    <div className="container form-container">
      <div className="row form-row-custom">
        {showLogin ? <Login handleComponent={handleComponent} />
          : <Signup handleComponent={handleComponent} />}
      </div>
    </div>
  );
};

export default Home;
