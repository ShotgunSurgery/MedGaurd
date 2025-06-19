import React from 'react'
import "../styles/Home_page.css"
import { useNavigate } from "react-router-dom";

const Home_page = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/doctor_registration');
    };

    const ai_bot = () => {
        navigate('/ai_bot');
    }

    const doctors_page = () => {
        navigate('/patient_dashboard');
    }

    return (
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
                    <a>Home</a>
                    <a>About</a>
                    <a href ='/patient_history_form'>Upload History</a>
                    <a href="/ai-feedback">History</a>
                    <button className='nav_button'>Get Started</button>
                </div>
            </div>

            <div className='hero_section'>

                <div className='hero_content'>
                    <div className='headline'>
                        <h2>Get Smarter with Your Medical Decisions</h2>
                    </div>
                    <div className='sub_headline'>
                        Avoid unnecessary tests. Understand your symptoms.
                    </div>
                    <div className='sub_headline'>
                        Stay in control of your health.
                    </div>
                </div>

                <div className='hero_cards'>

                    <div className='card1'>
                        <h1 style={{ color: "white", textAlign: "left" }}>Why Choose Us?</h1>
                        <p style={{ textAlign: "left", marginTop: "-10px", }} >We simplify healthcare decisions with AI you can trust. Avoid unnecessary tests and make informed choices. Our system is built for clarity, privacy, and efficiency. Trusted by patients. Powered by experts. Ready for you.</p>
                    </div>

                    <div className='card2' onClick={ai_bot}>
                        <div className='top-div'>

                        </div>
                        <div className='bottom-div'>
                            <p><b>Dr.Prompt</b></p>
                        </div>
                    </div>

                    <div className='card2' onClick={doctors_page}>
                        <div className='top-div3'>

                        </div>
                        <div className='bottom-div'>
                            <p><b>Doctor</b></p>
                        </div>
                    </div>

                    <div className='card2' onClick={ai_bot}>
                        <div className='top-div4'>

                        </div>
                        <div className='bottom-div'>
                            <p><b>Pathology Labs</b></p>
                        </div>
                    </div>

                    <div className='card2' onClick={ai_bot}>
                        <div className='top-div5'>

                        </div>
                        <div className='bottom-div'>
                            <p><b>Medicine</b></p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='doctor_registration'>
                <div className='left_div_doc'>
                </div>
                <div className='right_div_doc'>
                    <h1 style={{ textAlign: 'left', marginLeft: 20, marginTop: 5 }}>Join Us</h1>
                    <p style={{ textAlign: 'left', margin: 20, marginleft: 20, fontSize: 25, marginTop: -20 }}>Join MedGuard and become a part of a trusted platform where your expertise meets those who need it most. By registering for online counseling, you can reach patients beyond geographical limits, offer flexible consultation hours, and make a meaningful impact — all while maintaining your convenience and control. Let’s build a healthier future together.</p>
                    <button onClick={handleClick} style={{ backgroundColor: '#007cb9', color: 'white' }} className='doc_reg_button'>Be the Help They Need ⮕</button>
                </div>
            </div>

            {/* <div className='feedback-div'>
                <div className='feedback-left-div'>
                    <h1 style={{ textAlign: 'left', marginLeft: 20, marginTop: 5 }}>Join Us</h1>
                    <p style={{ textAlign: 'left', margin: 20, marginleft: 20, fontSize: 25, marginTop: -20 }}>Join MedGuard and become a part of a trusted platform where your expertise meets those who need it most. By registering for online counseling, you can reach patients beyond geographical limits, offer flexible consultation hours, and make a meaningful impact — all while maintaining your convenience and control. Let’s build a healthier future together.</p>
                    <button onClick={handleClick} style={{ backgroundColor: '#007cb9', color: 'white' }} className='doc_reg_button'>Be the Help They Need ⮕</button>
                </div>
                <div className='feedback-right-div'>

                </div>
            </div> */}

        </div>
    )
}

export default Home_page