import React from 'react'

const TravelersList = ({travelersList}) => {
  return (
    <div>
      <h2>רשימת המשתתפים</h2>
      <ul>
        {travelersList.map((traveler) => (
             <li key={traveler.userId}>
             <span>{traveler.userName}</span>
           </li>
        ))}
      </ul>
      <button onClick={() => console.log("לשים כאן פונקציה")}>צור טיול חדש</button>
    </div>
  )
}

export default TravelersList;