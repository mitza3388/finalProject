import React from 'react'
import Login from './Login'
import Register from './Register'
import './index.css';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="home">
      <h1>Welcome Trip planner</h1>
    <div className="container">
        <Login />
        <Register />
      </div>
      <Link to={"/ResumesList"}> Click Here If Already Loged In </Link>
      </div>
  )
}
