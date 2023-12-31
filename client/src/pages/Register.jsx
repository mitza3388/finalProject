import React, { useState } from 'react'
import fetchData from '../utils/fetchData'
import { useNavigate } from "react-router-dom";


const Register = () => {

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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
      const response = await fetchData('users/register', 'POST', formData);
      if (!response.ok) {
        console.log('Bad Request');
        setError(true);
      }
      else {
        navigate('/register');
      }
    }

    catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="box">
      <h2>Register</h2>
      <form id="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="registerEmail">
          Email:
          <input id="registerEmail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="registerPassword">
          Password:
          <input id="registerPassword"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      {error && <h5 style={{ color: 'red' }}>user is already exist</h5>}
    </div>
  );
};
export default Register;
