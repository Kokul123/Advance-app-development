import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Profile from './ProfileR';
import UserProfileCard from './Profile';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfileClick = () => {
    setShowProfileCard(true);
  };
  return (
    <AppBar position="static" sx={{
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', // Blue gradient background
      boxShadow: 'none'
    }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 0, '&:hover': { textDecoration: 'none' }, color: 'white', fontWeight: 'bold' }}>
          <Button color="inherit" component={Link} to="/user">
            Home
          </Button>
        </Typography>

        {/* Center Section */}
        <Typography style={{ marginLeft: '5%' }} variant="h6" sx={{ flexGrow: 1, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
          <Button color="inherit" component={Link} to="/package">
            Packages
          </Button>
          <Button color="inherit" component={Link} to="/boat">
            BoatHouse
          </Button>
          <Button color="inherit" component={Link} to="/bookings">
            Bookings
          </Button>
        </Typography>

        {/* Right Section */}

        <div className="navbar-right">
          <div>
            <Button
              color="inherit"
              aria-controls="profile-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className="navbar-button"
            >
              <Avatar sx={{ width: 72, height: 20, marginRight: '-60px', borderRadius: 5, backgroundColor: 'white', color: 'black', fontSize: 15 }}>
                User
              </Avatar>
              User
            </Button>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/profile" className="navbar-button">
                  User Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={() => setShowProfileCard(!showProfileCard)}>
                {/* Toggle the state to show/hide the profile card */}
                <div>
                  {showProfileCard && <UserProfileCard />}
                </div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/" className="navbar-button">
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>


      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
