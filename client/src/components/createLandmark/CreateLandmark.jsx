import React, { useState } from 'react';

const CreateLandmark = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    location: '',
    landmarkName: '',
    description: '',
    startTime: '',
    length: '',
    nextLandmarkId: 0, // You may initialize it to a default value
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, for example, send it to a server
    console.log('Form data submitted:', formData);
    // You can reset the form data if needed
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
    <div>
      <h2>Create a New Waypoint</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Landmark Name:
          <input type="text" name="landmarkName" value={formData.landmarkName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Start Time:
          <input type="text" name="startTime" value={formData.startTime} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Length:
          <input type="text" name="length" value={formData.length} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Next Landmark ID:
          <input type="number" name="nextLandmarkId" value={formData.nextLandmarkId} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Create Waypoint</button>
      </form>
    </div>
  );
};

export default CreateLandmark;
