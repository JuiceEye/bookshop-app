import React from 'react';
import '../css/profile.css';

const Profile = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome, Farukh!</h1>
      </header>

      <section className="user-profile">
        <h2>User Profile</h2>
        <div className="profile-details">
          <p><b>First Name:</b> Farukh</p>
          <p><b>Last Name:</b> Iminov</p>
          <p><b>Bonuses:</b> 100 pts</p>
          <p><b>Email:</b> farukhiminov@gmail.com</p>
          <p><b>Contact Phone:</b> +7(777)-777-77-77</p>
        </div>
      </section>

      <section className="order-history">
        <h2>Order History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>06.10.23</td>
              <td>Harry potter</td>
            </tr>
            <tr>
              <td>07.10.23</td>
              <td>The silver eyes</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="contact-support">
        <h2>Contact Support</h2>
        <form>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" cols="50"></textarea>

          <input type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
};

export default Profile;
