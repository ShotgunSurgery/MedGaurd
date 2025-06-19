import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/doctor_registration_page.css";
export const Doctor_registration_page = () => {
    const [name, setName] = useState('');
    const [exp, setexp] = useState('');
    const [sp, setsp] = useState('');
    const [aform, setaform] = useState('');
    const [atill, setatill] = useState('');
    const [Degrees, setDegrees] = useState('');
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    const submission = (e) => {
        e.preventDefault();

        let doc_info = {
            name: name,
            exp: exp,
            sp: sp,
            aform: aform,
            atill: atill,
            Degrees: Degrees
        }

        const formData = new FormData();
        formData.append('image', image);

        let doc_info_json = JSON.stringify(doc_info);

        fetch('http://localhost:5000/doctor_registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: doc_info_json,
        })
            .then(res => res.json())
            .then(data => console.log("Server data: ", data))
            .catch(err => { console.error("Eroor: ", err) });

        navigate('/doc_dashboard');
    };

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
                    <a  href='home'>Home</a>
                    <a>About</a>
                    <a>Services</a>
                    <a>Contact</a>
                    <button className='nav_button'>Get Started</button>
                </div>
            </div>
            </div>
        <div className="doc-registration-container">
            <form className="doc-registration-form" onSubmit={submission}>
                <h2 className="form-heading">Doctor Registration</h2>
                <label>
                    <input placeholder="Name" type="text" name="name" required onChange={(e) => setName(e.target.value)} value={name} />
                </label>
                <label>
                    <input placeholder="Years of experience" type="number" name="epx" min="0" required onChange={(e) => setexp(e.target.value)} value={exp} />
                </label>
                
                <label>
                    <select name="sp" required onChange={(e) => setsp(e.target.value)}>
                        <option value="">Select Specilization</option>
                        <option value="option1" selected={sp === "option1"}>Cardiologist</option>
                        <option value="option2" selected={sp === "option2"}>Dermatologist</option>
                        <option value="option3" selected={sp === "option3"}>Orthopedic Surgeon</option>
                        <option value="option4" selected={sp === "option4"}>Neurologist</option>
                        <option value="option5" selected={sp === "option5"}>Gastroenterologist</option>
                        <option value="option6" selected={sp === "option6"}>Dentist</option>
                        <option value="option7" selected={sp === "option7"}>Ophthalmologist</option>
                        <option value="option8" selected={sp === "option8"}>Urologist</option>
                    </select>
                </label>

                <label style={{ textAlign: 'left' }}>
                    Avaliable from
                    <input type="time" name="time_slot" required onChange={(e) => setaform(e.target.value)} />
                </label>

                <label style={{ textAlign: 'left' }}>
                    Avaliable till
                    <input type="time" name="time_slot" required onChange={(e) => setatill(e.target.value)} />
                </label>

                <label>
                    <input placeholder="Degrees" type="text" name="Degrees" required onChange={(e) => setDegrees(e.target.value)} value={Degrees} />
                </label>

                <label style={{ textAlign: 'left' }}>
                    Upload Profile pitchure
                    <input type="file" name="file" multiple required onChange={(e) => setImage(e.target.files[0])} />
                </label>

                <label style={{ textAlign: 'left' }}>
                    Upload Degree Certificate
                    <input type="file" name="file" multiple required />
                </label>

                <button type="submit">Register</button>
            </form>
        </div>
        </div>
    );
};


