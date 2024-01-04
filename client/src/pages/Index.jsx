import React from 'react';
import Login from './Login';
import Register from './Register';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className='container-fluid align-items-center'>
      <div className="home container">
        <div className='mt-5'>
          <h1>Welcome to Trip planner</h1>

          <div className="row">
            <div className="col-md-6">
              <Login />
            </div>
            <div className="col-md-6">
              <Register />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
