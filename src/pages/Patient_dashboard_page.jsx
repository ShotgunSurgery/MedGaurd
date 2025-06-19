import React from 'react'
import '../styles/Patient_dashboard_page.css'
import { useState, useEffect } from 'react'

export const Patient_dashboard_page = () => {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('/doctors')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, []);

  return (
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

      <div>
        {doctors.map((doctor) => (
          <div key={doctor._id}>
            <h2>{doctor.name}</h2>
            <p>{doctor.exp}</p>
            <p>{doctor.sp}</p>
            <p>{doctor.atill}</p>
            <p>{doctor.Degrees}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
