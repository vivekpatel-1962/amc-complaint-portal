import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const ZonalOfficerDashboard = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, Zonal Officer {user?.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Zone: {user?.assignedZone}
        </Typography>
        <Typography variant="body1">
          This is your zonal officer dashboard. Here you can:
        </Typography>
        <ul>
          <li>Monitor all wards in your zone</li>
          <li>Review ward officer performance</li>
          <li>Handle escalated complaints</li>
          <li>Generate zone-level reports</li>
        </ul>
      </Box>
    </Container>
  );
};

export default ZonalOfficerDashboard; 