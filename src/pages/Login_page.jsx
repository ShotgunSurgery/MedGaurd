import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login_page.css";

const Login_page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    let user_login_credentials = {
      email: email,
      password: password
    };

    let ulc_json = JSON.stringify(user_login_credentials);

    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: ulc_json
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Invalid credentials");
        }
      })
      .then(data => {
        console.log("Server response: ", data);
        navigate('/home'); // Redirect to home page
      })
      .catch(err => {
        alert("Login failed: " + err.message);
        console.error("Error: ", err);
      });
  }

  return (
    <div>
    <div className='main_div'>

            <div className='contact_bar'>
                <div className='left_div'>
                    <p>✉ contact@example.com</p>
                    <p>🕻 +91 548 369 25</p>
                </div>
                <div className='right_div'>

                </div>
            </div>

            <div className='nav_bar'>
                <div className='left_nav'>
                    <h2>MedGaurd</h2>
                </div>
                <div className='right_nav'>
                    <a>Home</a>
                    <a>About</a>
                    <a>Services</a>
                    <a>Contact</a>
                    <button className='nav_button'>Get Started</button>
                </div>
            </div>
            </div>
    <div className="login-registration-container">
      <form className="registration-form login-form" onSubmit={handleLogin}>
        <h2 className="form-heading">Login</h2>
        <label>
          <input
            placeholder="Username or Email"
            type="text"
            name="username"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            required
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login_page;