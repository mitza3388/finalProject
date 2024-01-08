// import React from 'react'
// import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import ViewTrip from '../viewTrip/ViewTrip';

// const EntryAs = () => {
//   const navigate = useNavigate();

//   const handleLogin = (role) => {
//     if (role === 'guide') {
//       navigate("/guide")
//     } else if (role === 'traveler') {
//       navigate("/traveler")
//     }
//   };

//   return (
//     <div className='container d-flex align-items-center justify-content-space-between text-center'>
//       <Button className='m-3' onClick={() => handleLogin('guide')}>Log in as a Guide</Button>
//       <Button  className='m-3' onClick={() => handleLogin('traveler')}>Log in as a Participant</Button>
//     </div>
//   );
// }


// export default EntryAs



import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ViewTrip from '../viewTrip/ViewTrip';
import './EntryAs.css'; // Import the CSS file for styling

const EntryAs = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === 'guide') {
      navigate("/guide");
    } else if (role === 'traveler') {
      navigate("/traveler");
    }
  };

  return (
    <div className='entry-as-container'>
      <div className='background'>
        <div className='content-container'>
          <div className='role-container'>
            <Link to="/guide" className='guide entryBox'>
              <div className='icon'></div>
              <p>Log in as a Guide</p>
            </Link>
            <Link to="/traveler" className='participant entryBox'>
              <div className='icon'></div>
              <p>Log in as a traveler</p>
            </Link>
          </div>
          {/* <Button className='m-3' onClick={() => handleLogin('guide')}>
            Log in as a Guide
          </Button>
          <Button className='m-3' onClick={() => handleLogin('traveler')}>
            Log in as a traveler
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default EntryAs;
