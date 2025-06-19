import React from 'react'
import '../styles/AI_Feedback_page.css'
import { useNavigate } from "react-router-dom";
export const AI_feedback_page = () => {
    const navigate = useNavigate();
    const sub = () => {
        navigate('/ai_feedback_form');
    }
    const correct_button_handler = () => {
        alert("Thank you for your feedback!")
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
                        <a  href='home' >Home</a>
                        <a>About</a>
                        <a>Services</a>
                        <a href="/ai-feedback">History</a>
                        <button className='nav_button'>Get Started</button>
                    </div>
                </div>
            </div>
            <h1 style={{textAlign: 'left', marginLeft: 90}}>Help Us Improve Your AI Experience</h1>
            <div className='Ai_history'>
                <h2 style={{textAlign: 'left', marginLeft: 40}}>Assesment 1</h2>
                <div className="ai-text-container">
                  <div className="left-box">
                    <p style={{textAlign: 'left', marginLeft: 40, fontSize: 20}}>Did you find the AI recommendations helpful? </p>
                  </div>
                  <div className="right-box">
                    <button onClick={correct_button_handler}>
                        ✔️
                    </button>
                    <button onClick={sub}>
                        ❌
                    </button>
                  </div>
                </div>
                
            </div>
        </div>
    )
}
