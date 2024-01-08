import React, { useState } from 'react'
import fetchData from '../utils/fetchData'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const Register = () => {
  const {tripId}=useParams();

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
      if (response.message !== 'succed register') {
        console.log('Bad Request');
        setError(true);
      } else {
        if(!tripId)
          navigate('/login');
        else
        navigate('/JoinTripConfirmation/:tripId');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };



  return (
    <div className="box pt-5">
      <h2>Register</h2>
      <form id="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="registerEmail">
          Email
          <input id="registerEmail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="registerPassword">
          Password
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
      {error && <h7 style={{ color: 'red' }}> <p>user is already exist, please 
      <Link to={"/"} className="no-underline"> Login </Link></p></h7>}
    </div>
  );
};
export default Register;
