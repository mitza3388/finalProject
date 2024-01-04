import React, { useState } from 'react'
import fetchData from '../../utils/fetchData'
import { useNavigate } from "react-router-dom";

import './createNewTrip.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Skeleton from '@mui/material/Skeleton';



const CreateNewTrip = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  //   name: '',
  //   date: '',

  // });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchData('trips/addNewTrip', 'POST', formData);
      console.log(response);
      if (!response) {
        console.log('Bad Request');
      }
      else {
        navigate('/guide');
      }
    }

    catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
  <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="tripName">
            Trip Name:
          </label>
          <input
            type="text"
            id="tripName"
            name="tripName"
            // value={formData.tripName}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        {/* <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="tripDesc">
            Trip Description:
          </label>
          <textarea
            id="tripDesc"
            name="tripDesc"
            value={formData.tripDesc}
            onChange={handleChange}
            style={styles.input}
          ></textarea>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="tripDate">
            Choose Date:
          </label>
          <input
            type="date"
            id="tripDate"
            name="tripDate"
            value={formData.tripDate}
            onChange={handleChange}
            style={styles.input}
          />
  </div>*/}

        <div style={styles.buttonGroup}>
          {/* <button type="button"
           onClick= {() => navigate('/createLandmark')}
           style={styles.button}>
            Add Landmark
          </button> */}

          <button
            type="button"
            onClick= {() => navigate('/createEquipmentList')}
            style={styles.button}
          >
            Add Equipment List
          </button>
        </div> 

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>








  );
};

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    width: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    background: '#fff',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  button: {
    flex: '1',
    padding: '8px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  submitButton: {
    backgroundColor: '#3498db',
    color: '#fff',
    width: '100%',
    padding: '8px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default CreateNewTrip;
