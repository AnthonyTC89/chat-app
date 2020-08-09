import React, { useState } from 'react';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

const Home = () => {
  const [showLogin, setshowLogin] = useState(true);

  const handleComponent = () => {
    setshowLogin(!showLogin);
  };

  return (
    <div className="container">
      <div className="row">
        {showLogin ? <Login handleComponent={handleComponent} />
          : <Signup handleComponent={handleComponent} />}
      </div>
    </div>
  );
};

export default Home;
