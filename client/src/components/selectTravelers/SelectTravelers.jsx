import React from 'react';

const UserSelect = ({ travelersNames, onSelectChange }) => {
  return (
    <div>
      <label htmlFor="travelerSelect">בחר משתתף</label>
      <select id="travelerSelect" onChange={(e) => onSelectChange(e.target.value)}>
        <option value="">בחר משתתף</option>
        {travelersNames.map((travelerName) => (
          <option key={travelerName} value={travelerName}>
            {travelerName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelect;
