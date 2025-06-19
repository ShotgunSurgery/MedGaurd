import React from 'react';

export const Patient_History_form = () => {
  const formStyles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    section: {
      marginBottom: '25px',
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontWeight: 'bold',
      fontSize: '14px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      fontSize: '14px',
    },
    select: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      fontSize: '14px',
    },
    checkboxGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      marginTop: '8px',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      fontSize: '14px',
    },
    button: {
      backgroundColor: '#28a745',
      color: '#fff',
      padding: '12px 20px',
      fontSize: '15px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      marginTop: '10px',
    }
  };

  return (
    <div className='main_div'>

      <div className='contact_bar'>
        <div className='left_div'>
          <p>✉ contact@medgaurd.com</p>
          <p>🕻 +91 548 369 25</p>
        </div>
        <div className='right_div'></div>
      </div>

      <div className='nav_bar'>
        <div className='left_nav'>
          <h2>MedGaurd</h2>
        </div>
        <div className='right_nav'>
          <a href='home'>Home</a>
          <a>About</a>
          <a href='/patient_history_form'>Upload History</a>
          <a href='/ai-feedback'>History</a>
          <button className='nav_button'>Get Started</button>
        </div>
      </div>

      <div style={formStyles.container}>
        <form>
          <h2>Patient Medical History</h2>

          <div style={formStyles.section}>
            <label style={formStyles.label}>Age:</label>
            <input type="number" placeholder="Enter age" style={formStyles.input} />

            <label style={formStyles.label}>Gender:</label>
            <select style={formStyles.select}>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <label style={formStyles.label}>Height (cm):</label>
            <input type="number" placeholder="e.g. 172" style={formStyles.input} />

            <label style={formStyles.label}>Weight (kg):</label>
            <input type="number" placeholder="e.g. 65" style={formStyles.input} />
          </div>

          <div style={formStyles.section}>
            <label style={formStyles.label}>Known Medical Conditions:</label>
            <div style={formStyles.checkboxGroup}>
              {['Diabetes', 'Hypertension', 'Heart Disease', 'Asthma', 'Allergies', 'Surgery History'].map(cond => (
                <label key={cond}>
                  <input type="checkbox" /> {cond}
                </label>
              ))}
            </div>
          </div>

          <div style={formStyles.section}>
            <label style={formStyles.label}>Lifestyle:</label>
            <div style={formStyles.checkboxGroup}>
              <label><input type="checkbox" /> Smoking</label>
              <label><input type="checkbox" /> Alcohol</label>
            </div>

            <label style={formStyles.label}>Physical Activity:</label>
            <select style={formStyles.select}>
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </select>

            <label style={formStyles.label}>Sleep Quality:</label>
            <select style={formStyles.select}>
              <option>Poor</option>
              <option>Average</option>
              <option>Good</option>
            </select>

            <label style={formStyles.label}>Diet Type:</label>
            <select style={formStyles.select}>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
              <option>Vegan</option>
            </select>
          </div>

          <div style={formStyles.section}>
            <label style={formStyles.label}>Current Medications:</label>
            <input type="text" placeholder="e.g. Metformin, Atorvastatin" style={formStyles.input} />
          </div>

          <div style={formStyles.section}>
            <label style={formStyles.label}>Family Medical History:</label>
            <input type="text" placeholder="e.g. Heart disease, diabetes" style={formStyles.input} />
          </div>

          <div style={formStyles.section}>
            <label style={formStyles.label}>Current Symptoms:</label>
            <textarea placeholder="e.g. Chest pain, fatigue, nausea..." rows="3" style={formStyles.textarea} />
          </div>

          <button type="submit" style={formStyles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};
