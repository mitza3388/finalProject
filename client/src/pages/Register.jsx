import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from '../FIREBASE/config';
import { useNavigate } from 'react-router-dom';


export default function Register() {

  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
    role: 'admin'
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
        navigate('/Form');
      })
      .catch((err) => {
        console.log(err.message);
      })
  };


  return (
    <div className="box">
      <h2>Register</h2>
      <form id="registerForm">

        <label htmlFor="registerEmail">Email</label>
        <input type="email" id="registerEmail" name="registerEmail" onChange={(e) => { setData({ ...data, email: e.target.value })}}required />

        <label htmlFor="registerPassword">Password</label>
        <input type="password" id="registerPassword" name="registerPassword" onChange={(e) => { setData({ ...data, password: e.target.value })}} required />
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  )
}
