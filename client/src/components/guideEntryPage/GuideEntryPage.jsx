import React, { useEffect, useState } from 'react';
import fetchData from '../../utils/fetchData';
import MyTrips from '../myTrips/MyTrips';
import CreateNewTrip from '../../pages/createNewTrip/CreateNewTrip';
import { useNavigate } from "react-router-dom";
import { TripProvider } from '../../context/tripsContext';

// import CreateNewTrip from '../../pages/createNewTrip/CreateNewTrip';

import './guideEntryPage.css'
import { Button } from 'react-bootstrap';
const GuideEntryPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const response = await fetchData('trips/getTripsByGuideId');
                console.log(response);
                setData(response);
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
        return (
        //<div>Loading...</div>;
        <div className="loader"></div>
        )
    }

    return (
        <>
            <TripProvider>
                <MyTrips trips={data}></MyTrips>
                {/* <button onClick={() => console.log("לשים כאן פונקציה")}>create new trip</button> */}
                <Button className='m-3' onClick={() => navigate('/createNewTrip')}>create new trip</Button>
            </TripProvider>
        </>);
};

export default GuideEntryPage;
