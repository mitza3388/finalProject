import React from 'react';
import Login from './Login';
import Register from './Register';
import { Link, useParams } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const {tripId}=useParams();
  console.log(tripId);

  return (
    <div className='container-fluid align-items-center'>
      <div className="home container">
        <div className='mt-5'>
          <h1>Welcome to Trip planner</h1>

          <div className="row">
            <div className="col-md-6">
              <Login />
              <h7>Not registered yet? 
              <Link to={"/register"} className="no-underline"> Sign Up </Link></h7>
            </div>
            {/* <div className="col-md-6">
              <Register />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
