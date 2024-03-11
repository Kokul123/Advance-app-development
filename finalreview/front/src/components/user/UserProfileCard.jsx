import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const UserProfileCard = ({ user }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div">
          {user.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Email: {user.email}
        </Typography>
        <Typography color="textSecondary">
          Role: {user.role}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
