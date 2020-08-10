import React from 'react';
import CryptoJS from 'crypto-js';
import PropTypes from 'prop-types';
import './Gravatar.css';

const Gravatar = ({ user }) => {
  const hash = CryptoJS.MD5(user.email);
  const gravatar = `https://www.gravatar.com/avatar/${hash}`;
  const hrefGravatar = 'https://en.gravatar.com/site/login';
  return (
    <a href={hrefGravatar} target="_blank" rel="noopener noreferrer">
      <img className="gravatar-img" alt={user.username} src={gravatar} />
    </a>
  );
};

Gravatar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Gravatar;
