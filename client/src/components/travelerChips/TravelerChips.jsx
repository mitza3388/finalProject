import React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const TravelerChips = ({ travelers }) => {
  // בדיקה שלא ניסינו לעבור על מערך שאינו מוגדר
  if (!travelers || travelers.length === 0) {
    return <div>No travelers available</div>;
  }

  return (
    <Stack direction="row" spacing={1}>
      {travelers.map((traveler, index) => (
        <Chip
          key={index}
          sx={{ overflow: 'hidden' }}
          style={{ margin: '2px' }}
          avatar={
            traveler.avatar ? (
              <Avatar alt={traveler.name} src={traveler.avatar} style={{ margin: '2px' }} />
            ) : (
              <Avatar style={{ margin: '2px' }}>{traveler.name.charAt(0)}</Avatar>
            )
          }
          label={traveler.name}
          variant="outlined"
        />
      ))}
    </Stack>
  );
};

export default TravelerChips;
