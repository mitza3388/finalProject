// // import React, { useState } from 'react';
// // import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';
// // import { useNavigate } from 'react-router-dom';
// // import LocationSelector from '../locationSelector/LocationSelector';



// // const CreateLandmark = () => {
// //     const navigate = useNavigate();

// //     // State to manage form data
// //     const [formData, setFormData] = useState({
// //         location: '',
// //         landmarkName: '',
// //         description: '',
// //         startTime: '',
// //         length: '',
// //         nextLandmarkId: 0,
// //     });

// //     // State to manage clicked location
// //     const [clickedLocation, setClickedLocation] = useState(null);

// //     // Handle input changes
// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData((prevData) => ({ ...prevData, [name]: value }));
// //     };

// //     // Handle clicked location changes
// //     const handleLocationChange = (location) => {
// //         setClickedLocation(location);
// //         // Update the location input in the form
// //         setFormData((prevData) => ({ ...prevData, location: `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}` }));

// //         if(formData.landmarkName == '')
// //         setFormData((prevData) => ({ ...prevData, landmarkName: `${location.streetName}`}));
// //     };

// //     // Handle form submission
// //     const handleSubmit = async (e) => {
// //         e.preventDefault();


// //             try {
// //                 const response = await fetchData(`trips/addNewLandmark/${}`, 'PUT', formData);
// //                 console.log(response);
// //                 setData(response);
// //             } catch (error) {
// //                 console.error('Error:', error.message);
// //                 setError(error);
// //             }

// //         console.log('Form data submitted:', formData);
// //         setFormData({
// //             location: '',
// //             landmarkName: '',
// //             description: '',
// //             startTime: '',
// //             length: '',
// //             nextLandmarkId: 0,
// //         });
// //     };

// //     return (
// //         <Box
// //             component="form"
// //             sx={{
// //                 '& .MuiTextField-root': { m: 1, width: '25ch' },
// //             }}
// //             noValidate
// //             autoComplete="off"
// //         >
// //             <div>
// //                 <TextField
// //                     id="outlined-multiline-flexible"
// //                     label="Landmark Name"
// //                     multiline
// //                     defaultValue={formData.landmarkName}
// //                     onChange={handleInputChange}
// //                 />
// //                 <br />
// //                 <TextField
// //                     id="outlined-multiline-static"
// //                     label="Location"
// //                     multiline
// //                     //defaultValue={formData.location}
// //                     value={formData.location}
// //                     onChange={handleInputChange}
// //                 />
// //                 <br />
// //                 <TextField
// //                     id="outlined-textarea"
// //                     label="Description"
// //                     placeholder="Description"
// //                     multiline
// //                     defaultValue={formData.description}
// //                     onChange={handleInputChange}
// //                 />
// //                 <br />
// //                 <TextField
// //                     id="outlined-multiline-static"
// //                     label="Start Time"
// //                     multiline
// //                     defaultValue={formData.startTime}
// //                     onChange={handleInputChange}
// //                 />
// //                 <br />
// //                 <TextField
// //                     id="outlined-multiline-static"
// //                     label="Length"
// //                     multiline
// //                     defaultValue={formData.length}
// //                     onChange={handleInputChange}
// //                 />
// //                 <br />

// //                 <LocationSelector onLocationChange={handleLocationChange} />


// //                 <button type="submit" onClick={handleSubmit}>
// //                     Create Landmark
// //                 </button>
// //             </div>
// //         </Box> 
// //     );
// // };

// // export default CreateLandmark;



// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { useNavigate } from 'react-router-dom';
// import LocationSelector from '../locationSelector/LocationSelector';

// const CreateLandmark = () => {
//     const navigate = useNavigate();

//     // State to manage form data
//     const [formData, setFormData] = useState({
//         location: '',
//         landmarkName: '',
//         description: '',
//         startTime: '',
//         length: '',
//         nextLandmarkId: 0,
//     });

//     // State to manage clicked location
//     const [clickedLocation, setClickedLocation] = useState(null);

//     // Handle input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     // Handle clicked location changes
//     const handleLocationChange = (location) => {
//         setClickedLocation(location);

//         // Update the location and landmarkName inputs in the form
//         setFormData((prevData) => ({
//             ...prevData,
//             location: `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`,
//             landmarkName: location.streetName,
//         }));
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Your form submission logic here

//         console.log('Form data submitted:', formData);
//         setFormData({
//             location: '',
//             landmarkName: '',
//             description: '',
//             startTime: '',
//             length: '',
//             nextLandmarkId: 0,
//         });
//     };

//     return (
//         <Box
//             component="form"
//             sx={{
//                 '& .MuiTextField-root': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//         >
//             <div className='d-flex row bg-dark'>
//                 <div>
//                     <TextField
//                         id="outlined-multiline-flexible"
//                         label="Landmark Name"
//                         multiline
//                         defaultValue={formData.landmarkName}
//                         onChange={handleInputChange}
//                     />
//                     <br />
//                     <TextField
//                         id="outlined-multiline-static"
//                         label="Location"
//                         multiline
//                         value={formData.location}
//                         onChange={handleInputChange}
//                     />
//                     <br />
//                     <TextField
//                         id="outlined-textarea"
//                         label="Description"
//                         placeholder="Description"
//                         multiline
//                         value={formData.description}
//                         onChange={handleInputChange}
//                     />
//                     <br />
//                     <TextField
//                         id="outlined-multiline-static"
//                         label="Start Time"
//                         multiline
//                         value={formData.startTime}
//                         onChange={handleInputChange}
//                     />
//                     <br />
//                     <TextField
//                         id="outlined-multiline-static"
//                         label="Length"
//                         multiline
//                         value={formData.length}
//                         onChange={handleInputChange}
//                     />
//                     <br />

//                     <button type="submit" onClick={handleSubmit}>
//                         Create Landmark
//                     </button>
//                 </div>
//                 <div>
//                     <LocationSelector onLocationChange={handleLocationChange} />
//                 </div>


//             </div>
//         </Box>
//     );
// };

// export default CreateLandmark;




import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from 'react-router-dom';
import LocationSelector from '../locationSelector/LocationSelector';
import { Button } from '@mui/material';
import fetchData from '../../utils/fetchData';

const CreateLandmark = () => {
    const navigate = useNavigate();

    // State to manage form data
    const [formData, setFormData] = useState({
        location: '',
        landmarkName: '',
        description: '',
        startTime: '',
        length: '',
        nextLandmarkId: 0,
    });

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
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Your form submission logic here

        console.log('Form data submitted:', formData);


            try {
                const response = await fetchData(`/addNewLandmark/${id}`, 'PUT', formData);
                console.log(response);
                setData(response);
            } catch (error) {
                console.error('Error:', error.message);
                setError(error);
            }
        

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
                        Create Landmark
                    </Button>
                </div>
                <div>
                    {/* Additional content can be added here if needed */}
                </div>
            </div>
        </Box>
    );
};

export default CreateLandmark;
