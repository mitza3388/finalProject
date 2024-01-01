import React from 'react'
import MyTrips from '../myTrips/MyTrips';
import fetchData from '../../utils/fetchData';
import { useState,useEffect } from 'react';

const Traveler=() =>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchDataAsync = async () => {
        try {
          const response = await fetchData('users/getMyTrips');
          // המשתנה response מכיל את התשובה שקיבלת מהשרת
            const { userTrips } = response; // יוצר משתנה חדש שמכיל רק את מערך הנסיעות מהתשובה

            // userTrips עכשיו מכיל רק את המערך של הנסיעות, ונוכל לעבוד איתו
            console.log(userTrips); // מדפיס את מערך הנסיעות בקונסול

          setData(userTrips);
       
        } catch (error) {
          console.error('Error:', error.message);
          setError(error);
        }
      };
  
      fetchDataAsync();
    }, []); // Empty dependency array to run the effect only once
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!data) {
      return <div>Loading...</div>;
    }
    console.log(data);
    return <div><MyTrips trips={data}></MyTrips></div>;
  };
  export default Traveler;

