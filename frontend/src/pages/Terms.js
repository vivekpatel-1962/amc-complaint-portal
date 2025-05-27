import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
} from '@mui/material';

const Terms = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Terms of Use
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Last updated: March 21, 2024
          </Typography>
          
          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography paragraph>
            By accessing and using the AMC Complaint Portal, you accept and agree to be bound by these
            Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use
            the portal.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            2. User Responsibilities
          </Typography>
          <Typography paragraph>
            As a user of the portal, you agree to:
          </Typography>
          <ul>
            <Typography component="li" paragraph>
              Provide accurate and truthful information
            </Typography>
            <Typography component="li" paragraph>
              Not submit false or malicious complaints
            </Typography>
            <Typography component="li" paragraph>
              Maintain the confidentiality of your account credentials
            </Typography>
            <Typography component="li" paragraph>
              Not misuse or attempt to exploit the system
            </Typography>
          </ul>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            3. Complaint Submission
          </Typography>
          <Typography paragraph>
            When submitting complaints:
          </Typography>
          <ul>
            <Typography component="li" paragraph>
              Provide accurate location and issue details
            </Typography>
            <Typography component="li" paragraph>
              Upload clear and relevant images
            </Typography>
            <Typography component="li" paragraph>
              Maintain respectful communication
            </Typography>
            <Typography component="li" paragraph>
              Follow up on requests for additional information
            </Typography>
          </ul>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            4. Service Limitations
          </Typography>
          <Typography paragraph>
            AMC reserves the right to:
          </Typography>
          <ul>
            <Typography component="li" paragraph>
              Modify or terminate services for any reason
            </Typography>
            <Typography component="li" paragraph>
              Remove inappropriate or false complaints
            </Typography>
            <Typography component="li" paragraph>
              Suspend accounts that violate these terms
            </Typography>
          </ul>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            5. Intellectual Property
          </Typography>
          <Typography paragraph>
            All content and materials available on the portal are property of AMC and are protected by
            applicable intellectual property laws. Users may not copy, modify, or distribute the content
            without explicit permission.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            6. Disclaimer
          </Typography>
          <Typography paragraph>
            The portal is provided "as is" without any warranties. AMC does not guarantee uninterrupted
            or error-free service. Response times for complaints may vary based on severity and available
            resources.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            7. Changes to Terms
          </Typography>
          <Typography paragraph>
            AMC reserves the right to modify these terms at any time. Users will be notified of significant
            changes. Continued use of the portal after changes constitutes acceptance of the new terms.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            8. Contact Information
          </Typography>
          <Typography paragraph>
            For questions about these Terms of Use, please contact:
          </Typography>
          <Typography paragraph>
            Email: legal@amcportal.gov.in
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

export default Terms; 