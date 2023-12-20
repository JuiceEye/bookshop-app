import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <div className="header">
      <Link to="/">
        <img src="icons/logo.png" className="logo" alt="Logo" />
      </Link>
      <input type="search" className="search" />
      <Link to="/">
        <img src="icons/search.png" className="header-button" alt="Search" />
      </Link>
      <Link to="/profile">
        <img src="icons/user.png" className="header-button" alt="User" />
      </Link>
      <Link to="/register">
        <button className="register">Register</button>
      </Link>
      <Link to="/login">
        <button className="register">Login</button>
      </Link>
      <div className="menu">
      </div>
    </div>
  );
};

export default Header;