import React from 'react'
import { useNavigate } from 'react-router-dom';

const EntryAs = () => {
    const navigate = useNavigate();

    const handleLogin = (role) => {
        if (role === 'guide') {
          navigate("/guide")
        } else if (role === 'traveler') {
            navigate("/traveler")
        }
      };

  return (

    <div>
      <button onClick={() => handleLogin('guide')}>Log in as a Guide</button>
      <button onClick={() => handleLogin('traveler')}>Log in as a Participant</button>
    </div>
  )
}


export default EntryAs