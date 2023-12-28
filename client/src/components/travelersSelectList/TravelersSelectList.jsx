import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const TravelersSelectList = ({travelers}) => {
  return (
    <Autocomplete
      disablePortal
      id="travelersSelectList"
      options={travelers}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="travelers" />}
    />
  );
}


export default TravelersSelectList ;


