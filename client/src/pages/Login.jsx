import React, { useContext, useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FIREBASE/config'
import { useNavigate } from 'react-router-dom';





export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: ''
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        console.log(user);
        navigate('/ResumesList');
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="box">
      <h2>Login</h2>
      <form id="loginForm">
        <label htmlFor="loginUsername">Email</label>
        <input type="email" name="loginUsername" onChange={(e) => { setData({ ...data, email: e.target.value }) }} required />

        <label htmlFor="loginPassword">Password</label>
        <input type="password" id="loginPassword" name="loginPassword" onChange={(e) => { setData({ ...data, password: e.target.value }) }} required />

        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}
