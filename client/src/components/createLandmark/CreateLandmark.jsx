import React, { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from 'react-router-dom';
import LocationSelector from '../locationSelector/LocationSelector';
import { Button } from '@mui/material';
import fetchData from '../../utils/fetchData';
import { useTripContext } from '../../context/tripsContext';
import { useLandmarksContext } from '../../context/landmarksContext';
import { Update } from '@mui/icons-material';

const CreateLandmark = ({handleClose}) => {

    const { trip, updateTrip } = useTripContext();
    // const {landmarks,setLandmarks} = useLandmarksContext([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        location: '',
        landmarkName: '',
        description: '',
        startTime: '',
        length: '',
        nextLandmarkId: 0,
    });

    // useEffect(() => {
    //     console.log("Updated landmarks:", landmarks);
    //     // Any other actions you want to perform after updating landmarks
    //   }, [landmarks]);
      

//     useEffect(() => {
//    console.log("trip in use effect",trip);
//     }, [trip])
    
    // State to manage clicked location
    const [clickedLocation, setClickedLocation] = useState(null);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle clicked location changes
    const handleLocationChange = (location) => {
        setClickedLocation(location);

        // Update the location and landmarkName inputs in the form
        setFormData((prevData) => ({
            ...prevData,
            location: `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`,
            landmarkName: location.streetName,
        }));
        handleClose;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setLandmarks((prevLandmarks) => [...prevLandmarks, formData]);
        // console.log("landmarks on submit",landmarks);
        updateTrip('route', formData);
        
        setFormData({
            location: '',
            landmarkName: '',
            description: '',
            startTime: '',
            length: '',
            nextLandmarkId: 0,
        });
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                '& .MuiInputLabel-root': { position: 'absolute' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='d-flex row'>
                <div>
                    <TextField
                        id="landmark-name"
                        name="landmarkName"
                        label="Landmark Name"
                        multiline
                        value={formData.landmarkName}
                        onChange={handleInputChange}
                    />
                    <br />
                    <TextField
                        id="location"
                        name="location"
                        label="Location"
                        multiline
                        value={formData.location}
                        onChange={handleInputChange}
                    />
                    <br />
                    <TextField
                        id="description"
                        name="description"
                        label="Description"
                        placeholder="Description"
                        multiline
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                    <br />
                    <TextField
                        id="start-time"
                        name="startTime"
                        label="Start Time"
                        multiline
                        value={formData.startTime}
                        onChange={handleInputChange}
                    />
                    <br />
                    <TextField
                        id="length"
                        name="length"
                        label="Length"
                        multiline
                        value={formData.length}
                        onChange={handleInputChange}
                    />
                    <br />

                    <LocationSelector onLocationChange={handleLocationChange} />

                    <Button type="submit" onClick={handleSubmit}>
                      save
                    </Button>
                </div>
            </div>
        </Box>
    );
};

export default CreateLandmark;
