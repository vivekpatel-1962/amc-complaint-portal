import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const CitizenDashboard = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user?.name}
        </Typography>
        <Typography variant="body1">
          This is your citizen dashboard. Here you can:
        </Typography>
        <ul>
          <li>Submit new complaints</li>
          <li>Track your existing complaints</li>
          <li>View complaint history</li>
          <li>Update your profile</li>
        </ul>
      </Box>
    </Container>
  );
};

export default CitizenDashboard; 