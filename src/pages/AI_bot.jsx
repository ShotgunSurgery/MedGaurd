import React, { useState } from 'react'
import '../styles/AI_bot.css'
import { useNavigate } from "react-router-dom";

export const AI_bot = () => {

    const navigate = useNavigate();

    const [symptoms, setSymptoms] = useState('');
    const [condition, setCondition] = useState('');
    const [meds, setMeds] = useState('');
    const [test, setTest] = useState('');
    const [response, setResponse] = useState('');

    const formattedResponse = response.replace(/(\d+)\. /g, '<li><h3>$1</h3> ').replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    const handleClick = () => {
    navigate('/patient_dashboard');
  };
    const submission = (e) => {
        e.preventDefault();

        let user_input = {
            symptoms: symptoms,
            condition: condition,
            meds: meds,
            test: test
        };

        const user_input_json = JSON.stringify(user_input);

        fetch('http://127.0.0.1:5001', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: user_input_json
        })
            .then(res => res.json())
            .then(data => {
                console.log("AI_Server_response: ", data);
                setResponse(data.response);  // Store response
            })
            .catch((err) => console.error("Error: ", err));
    }

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
                    <a href='home'>Home</a>
                    <a>About</a>
                    <a>Services</a>
                    <a>Contact</a>
                </div>
            </div>

            <div className='input_div'>

                <div className='box_header'>
                    <div className='box_head_left'>
                    </div>
                    <div className='box_head_right'>
                        <h2>Dr.Prompt - Your personal AI assistant is here to help</h2>
                    </div>
                </div>

                <form className='symptom_form'>
                    <h2 style={{ textAlign: 'left' }}>Your Symptoms</h2>
                    <p style={{ textAlign: 'left', marginTop: -10 }}>Sorry you're unwell — can you tell us your symptoms?</p>
                    <textarea className="input_feild" rows="10" cols="50" onChange={(e) => setSymptoms(e.target.value)}></textarea>

                    <p style={{ textAlign: 'left', marginTop: 10 }}>Tell us anything else you would like to describe about your condition</p>
                    <textarea className="input_feild" rows="10" cols="50" onChange={(e) => setCondition(e.target.value)}></textarea>

                    <p style={{ textAlign: 'left', marginTop: 10 }}>Plz fill the meds prescribed by your doc below</p>
                    <textarea className="input_feild" rows="10" cols="50" onChange={(e) => setMeds(e.target.value)}></textarea>

                    <p style={{ textAlign: 'left', marginTop: 10 }}>Fill in the test's recomended by your doc</p>
                    <textarea className="input_feild" rows="10" cols="50" onChange={(e) => setTest(e.target.value)}></textarea>

                    <button className='submit_button' onClick={submission}>Next</button>
                    {response && (
                        <div className="response-box">
                            <h3>AI Response:</h3>
                            {/* <p style={{textAlign: 'left'}}>{response}</p> */}
                            <div className="response" dangerouslySetInnerHTML={{ __html: `<h2>Test Necessity and Priority</h2><ol>${formattedResponse}</ol>` }} />
                            {/* <button style={{marginRight: 810, width: 50}}>Consult Doctors</button> */}
                            <button className="consult-doctors-btn" onClick={handleClick}>
                                <span style={{ display: 'inline' }}>Consult </span>
                                <span style={{ display: 'inline' }}>Doctors</span>
                            </button>

                        </div>
                    )}

                </form>

            </div>

        </div>
    )
}
