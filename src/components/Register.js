import React from 'react';
import '../css/registration.css';

const Register = () => {
  return (
    <div className="main-block">
      <h2>Registration</h2>
      <div className="sub-main">
        <div className="row-block">
          <p> Full name </p>
          <input type="text" name="name" />

          <p> Email </p>
          <input type="text" name="email" />

          <p> Password </p>
          <input type="text" name="password" />

          <p> Additional Information </p>
          <textarea name="additionalInfo" rows="4" cols="50"></textarea>
        </div>

        <div className="row-block">
          <p> Username </p>
          <input type="text" name="username" />

          <p> Phone number </p>
          <input type="text" name="phone" />

          <p> Confirm your password </p>
          <input type="text" name="confirmPassword" />
        </div>
      </div>

      <div className="gender">
        <p htmlFor="myCheckbox">What is your gender?</p>

        <div className="radio">
          <input type="radio" id="male" name="gender" value="male" />
          <p>Male</p>

          <input type="radio" id="female" name="gender" value="female" />
          <p>Female</p>
        </div>
      </div>

      <a href="" className="button">
        Submit
      </a>
    </div>
  );
};

export default Register;
