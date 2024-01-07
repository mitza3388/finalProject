
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DehazeIcon from '@mui/icons-material/Dehaze';
import PetsIcon from '@mui/icons-material/Pets'; // Change to the appropriate icons for each menu item
import { useNavigate } from 'react-router-dom';

const SideNavbar = () => {
  const navigate = useNavigate();

  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, left: open });
  };

  const handleMenuItemClick = (route) => {
    navigate(route);
    setState({ ...state, left: false });
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: 'Logout', route: '/guide' },
          { text: 'Gallery', route: '/guide' },
          { text: 'Home', route: '/' },
          { text: 'Enter as a Guide', route: '/guide' },
          { text: 'Enter as a Participant', route: '/guide' },
        ].map(({ text, route }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleMenuItemClick(route)}>
              <ListItemIcon>
                <PetsIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* Add additional sections or items as needed */}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <DehazeIcon />
      </Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
      >
        {list}
      </Drawer>
    </div>
  );
}

export default SideNavbar;
