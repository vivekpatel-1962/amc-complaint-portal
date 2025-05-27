import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2D3E50', // Rich navy blue - sophisticated main color
      light: '#3E5369',
      dark: '#1C2833',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E74C3C', // Vibrant coral - energetic accent
      light: '#EC7063',
      dark: '#C0392B',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#3498DB', // Sky blue - fresh accent
      light: '#5DADE2',
      dark: '#2980B9',
    },
    background: {
      default: '#F8FAFC', // Light blue-gray - modern background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#576574',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      color: '#2C3E50',
      letterSpacing: '-0.5px',
    },
    h2: {
      fontWeight: 600,
      color: '#2C3E50',
      letterSpacing: '-0.5px',
    },
    h3: {
      fontWeight: 600,
      color: '#2C3E50',
    },
    h4: {
      fontWeight: 600,
      color: '#2C3E50',
    },
    h5: {
      fontWeight: 600,
      color: '#2C3E50',
    },
    h6: {
      fontWeight: 600,
      color: '#2C3E50',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '0.5px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 28px',
          fontSize: '1rem',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 6px 12px rgba(45, 62, 80, 0.2)',
          },
          '&:active': {
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          boxShadow: '0 3px 6px rgba(45, 62, 80, 0.12)',
          '&:hover': {
            boxShadow: '0 8px 16px rgba(45, 62, 80, 0.2)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor: 'rgba(45, 62, 80, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 20px rgba(45, 62, 80, 0.08)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-6px) scale(1.01)',
            boxShadow: '0 12px 32px rgba(45, 62, 80, 0.12)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.3s ease',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3498DB',
              borderWidth: '2px',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3498DB',
              borderWidth: '2px',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 20px rgba(45, 62, 80, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&.MuiAppBar-root': {
            borderRadius: 0
          }
        },
        elevation1: {
          boxShadow: '0 4px 20px rgba(45, 62, 80, 0.08)',
        },
        elevation2: {
          boxShadow: '0 8px 24px rgba(45, 62, 80, 0.12)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 16px rgba(45, 62, 80, 0.08)',
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 0,
        },
      },
      defaultProps: {
        elevation: 0
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: '#3498DB',
          color: '#FFFFFF',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(45, 62, 80, 0.08)',
        },
      },
    },
  },
});

export default theme; 