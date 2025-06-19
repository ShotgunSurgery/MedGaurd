import React from 'react'

export const Doctors_Dashboard_page = () => {
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

      
    </div>
  )
}
