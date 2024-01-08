import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { Button } from 'react-bootstrap';

const Logout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('Logout function called. Token:', localStorage.getItem("token"));
      
        try {
          logout();
          const storedToken = localStorage.getItem("token");
          if (storedToken) {
            console.log('Logout successful. Token:', storedToken);
          } else {
            console.error('No token found after successful logout');
          }
          navigate('/');
        } catch (error) {
          console.error('Error during logout:', error.message);
        }
      };      

    return (
        <div>
            <Button className='mt-4' onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default Logout;
