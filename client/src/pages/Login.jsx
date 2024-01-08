
// Login.jsx
import React, { useState } from 'react';
import fetchData from '../utils/fetchData'
import { useNavigate, useParams } from "react-router-dom";


const Login = () => {
  const {tripId}=useParams();

  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:1200/api/v1/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );


      if (!response.ok) {
        console.log('Bad Request');
        setError(true);
      }

      else {
        const token = await response.text();
        localStorage.setItem("token", token);
        console.log('Login successful. Token:', localStorage.getItem("token"));
        if(!tripId)
          navigate('/login');
        else
        navigate('/JoinTripConfirmation/:tripId');
      }

    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="box pt-5">
      <h2>Login</h2>
      <form id="loginForm">
        <label htmlFor="loginUsername">Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="loginPassword">Password</label>
        <input
          type="password"
          id="loginPassword"
          name="password"
          value={data.password}
          onChange={handleInputChange}
          required
        />

        <button className='mt-5' type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
      {error && <h5 style={{ color: 'red' }}>user not exist or password/email not valid</h5>}
    </div>
  );
};

export default Login;