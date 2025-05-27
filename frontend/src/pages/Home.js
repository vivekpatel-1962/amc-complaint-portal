import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import { useAuth } from '../context/AuthContext';

// Styled components with animations
const AnimatedCard = styled(Card)`
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: ${props => props.delay}s;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AnimatedTypography = styled(Typography)`
  opacity: 1 !important;
  color: ${props => props.color || props.theme.palette.primary.contrastText};
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: ${props => props.delay}s;
`;

const AnimatedIcon = styled(Box)`
  transform: scale(0);
  animation: scaleIn 0.5s ease forwards;
  animation-delay: ${props => props.delay}s;

  @keyframes scaleIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

const AnimatedButton = styled(Button)`
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: 0.8s;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:hover:before {
    width: 300px;
    height: 300px;
  }
`;

// Add new styled component for navbar elements
const NavButton = styled(Button)`
  color: ${props => props.theme.palette.primary.contrastText} !important;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 16px;
  
  &:hover {
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.palette.secondary.main};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover:after {
    width: 80%;
  }
`;

const NavTypography = styled(Typography)`
  color: ${props => props.theme.palette.primary.contrastText};
`;

const SectionTitle = styled(Typography)`
  opacity: 1 !important;
  color: ${props => props.theme.palette.primary.main};
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing(4)};
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: 60px;
    height: 3px;
    background-color: ${props => props.theme.palette.secondary.main};
    transform: translateX(-50%);
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const features = [
    {
      title: 'Track Complaints',
      description: 'Real-time status updates on your complaints',
      icon: TrackChangesIcon,
    },
    {
      title: 'Role-based Access',
      description: 'Dedicated dashboards for citizens and officers',
      icon: SupervisorAccountIcon,
    },
    {
      title: 'Easy Submission',
      description: 'Submit complaints with location and photos',
      icon: AssignmentIcon,
    },
  ];

  const steps = [
    {
      title: 'Submit a Complaint',
      description: 'Describe the issue and add photos',
    },
    {
      title: 'Assigned to Ward Officer',
      description: 'Complaint is reviewed and assigned',
    },
    {
      title: 'Track Resolution',
      description: 'Get updates until resolution',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Patel',
      text: 'Got my street light fixed within 48 hours of complaint. Great service!',
      role: 'Citizen',
    },
    {
      name: 'Priya Shah',
      text: 'The portal makes it easy to report and track civic issues. Very efficient.',
      role: 'Resident',
    },
  ];

  useEffect(() => {
    // Add scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animated elements
    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Box>
      {/* Navigation Bar */}
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: theme => theme.palette.primary.main,
          color: theme => theme.palette.primary.contrastText,
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 0,
          '& .MuiToolbar-root': {
            borderRadius: 0
          }
        }}
      >
        <Toolbar 
          sx={{ 
            py: 1,
            borderRadius: 0,
            '& .MuiPaper-root': {
              borderRadius: 0
            }
          }}
        >
          <NavTypography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}
          >
            AMC Complaint Portal
          </NavTypography>
          {isMobile ? (
            <IconButton
              sx={{ 
                color: theme => theme.palette.primary.contrastText,
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <NavButton onClick={() => navigate('/')}>
                Home
              </NavButton>
              <NavButton onClick={() => navigate('/about')}>
                About
              </NavButton>
              {!user && (
                <>
                  <NavButton onClick={() => navigate('/login')}>
                    Login
                  </NavButton>
                  <NavButton 
                    onClick={() => navigate('/signup')}
                    sx={{
                      backgroundColor: 'secondary.main',
                      '&:hover': {
                        backgroundColor: 'secondary.dark',
                      }
                    }}
                  >
                    Sign Up
                  </NavButton>
                </>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Add toolbar for fixed navbar spacing */}
      <Toolbar />

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <List sx={{ width: 250 }}>
          <ListItem button onClick={() => { navigate('/'); setMobileMenuOpen(false); }}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => { navigate('/about'); setMobileMenuOpen(false); }}>
            <ListItemText primary="About" />
          </ListItem>
          {!user && (
            <>
              <ListItem button onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}>
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem button onClick={() => { navigate('/signup'); setMobileMenuOpen(false); }}>
                <ListItemText primary="Sign Up" />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
          <AnimatedTypography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            delay={0.3}
            sx={{ 
              color: 'white',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Report civic issues in your city with ease
          </AnimatedTypography>
          <AnimatedTypography 
            variant="h6" 
            sx={{ 
              mb: 4,
              color: 'white',
              opacity: 0.9
            }} 
            delay={0.5}
          >
            From potholes to streetlights, your complaints can now reach the right authorities
          </AnimatedTypography>
          <AnimatedButton
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleGetStarted}
            sx={{
              fontWeight: 'bold',
              px: 4,
              py: 1.5
            }}
          >
            Get Started
          </AnimatedButton>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Container sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionTitle variant="h4" component="h2">
            How It Works
          </SectionTitle>
        </Box>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <AnimatedCard delay={0.3 + index * 0.2} sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography 
                    variant="h5" 
                    component="div" 
                    gutterBottom
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 'bold' 
                    }}
                  >
                    {index + 1}. {step.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {step.description}
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <SectionTitle variant="h4" component="h2">
              Features
            </SectionTitle>
          </Box>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <AnimatedCard delay={0.3 + index * 0.2} sx={{ height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <AnimatedIcon delay={0.5 + index * 0.2}>
                      <feature.icon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    </AnimatedIcon>
                    <Typography 
                      variant="h6" 
                      component="div" 
                      gutterBottom
                      sx={{ 
                        color: 'primary.main',
                        fontWeight: 'bold' 
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </AnimatedCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionTitle variant="h4" component="h2">
            What Citizens Say
          </SectionTitle>
        </Box>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <AnimatedCard delay={0.3 + index * 0.2} sx={{ height: '100%' }}>
                <CardContent>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 2,
                      fontStyle: 'italic',
                      color: 'text.primary' 
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    sx={{
                      color: 'primary.main',
                      fontWeight: 'bold'
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 4, mt: 8 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                AMC Complaint Portal
              </Typography>
              <Typography variant="body2">
                Making city management more efficient
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Button color="inherit" onClick={() => navigate('/contact')}>
                Contact
              </Button>
              <Button color="inherit" onClick={() => navigate('/privacy')}>
                Privacy Policy
              </Button>
              <Button color="inherit" onClick={() => navigate('/terms')}>
                Terms of Use
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body2">
                © 2024 AMC Complaint Portal. All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 