import React from "react";
import "../styles/Registeration_page.css";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {

  const [name, SetName] = React.useState('');
  const [age, SetAge] = React.useState('');
  const [gender, SetGender] = React.useState('');
  const [email, SetEmail] = React.useState('');
  const [password, SetPassword] = React.useState('');
  const navigate = useNavigate();

  function submission(e) {

    e.preventDefault();

    let user_data = {
      name: name,
      age: age,
      gender: gender,
      email: email,
      password: password
    }

    let user_data_json = JSON.stringify(user_data);

    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: user_data_json,
    })
      .then(res => res.json())
      .then(data => console.log("Server data: ", data))
      .catch(err => console.error("Error: ", err));
    alert("Data sent to server!");
    navigate('/login');
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

    <div className="registration-container">
      <form className="registration-form" onSubmit={submission}>
        <h1 className="form-heading">Medical Registration</h1>
        <label>
          <input placeholder="Name" type="text" name="name" required onChange={(e) => SetName(e.target.value)} value={name} />
        </label>
        <label>
          <input placeholder="Age" type="number" name="age" min="0" required onChange={(e) => SetAge(e.target.value)} value={age} />
        </label>
        <label>
          <select name="gender" required onChange={(e) => SetGender(e.target.value)} value={gender}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          <input placeholder="Email Address" type="email" name="email" required onChange={(e) => SetEmail(e.target.value)} value={email} />
        </label>
        <label>
          <input placeholder="Password" type="password" name="password" required onChange={(e) => SetPassword(e.target.value)} value={password} />
        </label>
        
        <button type="submit">Register</button>
        <button
          type="button"
          onClick={() => navigate('/login')}
          style={{ marginTop: "10px" }}
        >
          Login
        </button>
      </form>
    </div></div>

  );
};

export default RegistrationPage;