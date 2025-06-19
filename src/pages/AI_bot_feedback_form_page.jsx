import React from 'react'
import '../styles/AI_bot_feedback_form_page.css'

export const AI_bot_feedback_form_page = () => {
  const click = () => { 
    alert("We'll surely improve upon this");
  }
    return (
        <div>
            <div className='main_div'>

                <div className='contact_bar'>
                    <div className='left_div'>
                        <p>✉ contact@medgaurd.com</p>
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
                        <a href='home' >Home</a>
                        <a>About</a>
                        <a>Services</a>
                        <a href="/ai-feedback">History</a>
                        <button className='nav_button'>Get Started</button>
                    </div>
                </div>
            </div>
            <h1 style={{textAlign: 'left', marginLeft: 90}}>We’re Sorry – Help Us Make It Right</h1>
            <div className='correct-div'>
              <p style={{ fontSize: 30, textAlign: 'left', marginLeft: 20}}>Select which predictions went wrong</p>
              <div className='option-box'>
                <button>Chest X-Ray</button>
                <button>MRI Scan</button>
                <button>Blood test</button>
                <button>Lipid Profile</button>
                <button onClick={click} style={{backgroundColor: '#007cb9'}} className='submit-button'>Submit</button>
              </div>
            </div>
        </div>
    )
}
