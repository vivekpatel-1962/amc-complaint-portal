import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
} from '@mui/material';

const Privacy = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Last updated: March 21, 2024
          </Typography>
          
          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            1. Information We Collect
          </Typography>
          <Typography paragraph>
            We collect information that you provide directly to us, including:
          </Typography>
          <ul>
            <Typography component="li" paragraph>
              Personal information (name, email address, phone number)
            </Typography>
            <Typography component="li" paragraph>
              Location data for complaint registration
            </Typography>
            <Typography component="li" paragraph>
              Images and documents related to complaints
            </Typography>
            <Typography component="li" paragraph>
              Communication records between users and officers
            </Typography>
          </ul>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            2. How We Use Your Information
          </Typography>
          <Typography paragraph>
            We use the collected information to:
          </Typography>
          <ul>
            <Typography component="li" paragraph>
              Process and manage your complaints
            </Typography>
            <Typography component="li" paragraph>
              Communicate updates about complaint status
            </Typography>
            <Typography component="li" paragraph>
              Improve our services and user experience
            </Typography>
            <Typography component="li" paragraph>
              Generate anonymous statistical data
            </Typography>
          </ul>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            3. Data Security
          </Typography>
          <Typography paragraph>
            We implement appropriate security measures to protect your personal information from unauthorized
            access, alteration, disclosure, or destruction. However, no method of transmission over the
            internet is 100% secure.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            4. Data Sharing
          </Typography>
          <Typography paragraph>
            We share your information only with:
          </Typography>
          <ul>
            <Typography component="li" paragraph>
              Relevant AMC departments and officers
            </Typography>
            <Typography component="li" paragraph>
              Law enforcement agencies when required by law
            </Typography>
          </ul>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            5. Your Rights
          </Typography>
          <Typography paragraph>
            You have the right to:
          </Typography>
          <ul>
            <Typography component="li" paragraph>
              Access your personal information
            </Typography>
            <Typography component="li" paragraph>
              Request correction of inaccurate data
            </Typography>
            <Typography component="li" paragraph>
              Request deletion of your data
            </Typography>
            <Typography component="li" paragraph>
              Object to processing of your data
            </Typography>
          </ul>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            6. Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions about this Privacy Policy, please contact us at:
          </Typography>
          <Typography paragraph>
            Email: privacy@amcportal.gov.in
            <br />
            Phone: +91-79-12345678
            <br />
            Address: AMC Main Office, Danapith, Ahmedabad - 380001
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Privacy; 