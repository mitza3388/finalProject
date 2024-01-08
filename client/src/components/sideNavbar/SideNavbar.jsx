import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PetsIcon from '@mui/icons-material/Pets';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';

const StyledDrawer = styled(Drawer)({
  width: 240,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: 'border-box',
  },
});

const StyledDrawerHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '8px',
});

const SideNavbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (route) => {
    navigate(route);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleDrawerOpen}>
        <DehazeIcon />
      </Button>
      <StyledDrawer variant="temporary" anchor="left" open={open} onClose={handleDrawerClose}>
        <StyledDrawerHeader>
          <Button onClick={handleDrawerClose}>
            <PetsIcon />
          </Button>
        </StyledDrawerHeader>
        <Divider />
        <List>
          {[
            { text: 'Logout', route: '/logout' },
            { text: 'Gallery', route: '/guide' },
            { text: 'Home', route: '/' },
            { text: 'Enter as a Guide', route: '/guide' },
            { text: 'Enter as a Participant', route: '/traveler' },
          ].map(({ text, route }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleMenuItemClick(route)}>
                <ListItemIcon>
                  {text === 'Logout' && <ExitToAppIcon />}
                  {text === 'Gallery' && <PhotoLibraryIcon />}
                  {text === 'Home' && <HomeIcon />}
                  {text === 'Enter as a Guide' && <PersonIcon />}
                  {text === 'Enter as a Participant' && <FlightTakeoffIcon />}                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </StyledDrawer>
    </div>
  );
}

export default SideNavbar;
