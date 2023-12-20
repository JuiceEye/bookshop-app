import React from 'react';
import '../css/login.css';

const Login = () => {

  return (
    <div className="main-block1">
      <h2>Login</h2>
      <div className="sub-main">
        <div className="row-block">
          <p>Username</p>
          <input type="text" name="username" />

          <p>Password</p>
          <input type="text" name="password" />
        </div>
      </div>

      <a href="" className="button">
        Login
      </a>
    </div>
  );
};

export default Login;