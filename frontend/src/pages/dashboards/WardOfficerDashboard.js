import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const WardOfficerDashboard = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, Ward Officer {user?.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Ward: {user?.assignedWard}
        </Typography>
        <Typography variant="body1">
          This is your ward officer dashboard. Here you can:
        </Typography>
        <ul>
          <li>View complaints in your ward</li>
          <li>Verify and assign complaints</li>
          <li>Track complaint resolution progress</li>
          <li>Generate ward-level reports</li>
        </ul>
      </Box>
    </Container>
  );
};

export default WardOfficerDashboard; 