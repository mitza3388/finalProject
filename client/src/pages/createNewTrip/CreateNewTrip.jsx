import React from 'react'








const CreateNewTrip = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetchData('trips/addNewTrip', 'POST', formData);
      if (!response.ok) {
        console.log('Bad Request');
        setError(true);
      }
      else {
        navigate('/register');
      }
    }

    catch (error) {
      console.error('Error:', error.message);
    }
  };



  return (
    <div className="box">
      <h2>Create new Trip</h2>
      <form id="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="registerEmail">
          Email
          <input id="registerEmail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="registerPassword">
          Password
          <input id="registerPassword"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      {error && <h5 style={{ color: 'red' }}>user is already exist</h5>} 
    </div>
  );
}
export default CreateNewTrip;
