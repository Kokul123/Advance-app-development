import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { InputLabel, Select, MenuItem } from '@mui/material';
import { signIn } from './auth';

function SignIn() {
  const [selectedRole, setSelectedRole] = useState('user');
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    signIn(form)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        
        console.log('====================================');
        console.log(res.data.token);
        console.log('====================================');
        alert("Login Successful");
        
        // Redirect based on selected role
        if (selectedRole === 'admin') {
          navigate('/admin');
        } else {
          navigate('/user');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Box
        sx={{
          backgroundImage: 'url(https://res.cloudinary.com/duhmcxwo3/image/upload/v1708419597/fineas-anton-e6WRYia0VuQ-unsplash_qe5bcn.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height:'754px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black', // Change font color to black
          fontWeight: 'bold', // Make font bold
        }}
      >
        <CssBaseline />
        <Container maxWidth="lg">
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', marginLeft: '5%' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ marginLeft: '5%' }}>
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <InputLabel
                style={{ marginTop: '16px', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                id="role-select-label"
              >
                Select Role *
              </InputLabel>
              <Select
                style={{ width: '400px' }}
                labelId="role-select-label"
                id="role-select"
                value={selectedRole}
                label="Select Role"
                onChange={handleRoleChange}
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
              <TextField
                style={{ width: '400px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                style={{ width: '400px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                style={{ width: '400px' }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item sx={{ display: 'flex', marginLeft: '25%' }}>
                  <Link to='/reg' variant="body2" style={{ textDecoration: 'underline', color: 'blue' }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default SignIn;
