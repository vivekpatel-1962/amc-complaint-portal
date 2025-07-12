import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import theme from './theme';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';

// Import dashboard components for different roles
import CitizenDashboard from './pages/dashboards/CitizenDashboard';
import WardOfficerDashboard from './pages/dashboards/WardOfficerDashboard';
import ZonalOfficerDashboard from './pages/dashboards/ZonalOfficerDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';

const App = () => {
  const DashboardComponent = ({ user }) => {
    switch (user?.role) {
      case 'citizen':
        return <CitizenDashboard />;
      case 'wardOfficer':
        return <WardOfficerDashboard />;
      case 'zonalOfficer':
        return <ZonalOfficerDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <Navigate to="/login" />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />

            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardComponent />
                </ProtectedRoute>
              }
            />

            {/* Role-specific routes */}
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/ward-officer/*"
              element={
                <ProtectedRoute allowedRoles={['wardOfficer']}>
                  <WardOfficerDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/zonal-officer/*"
              element={
                <ProtectedRoute allowedRoles={['zonalOfficer']}>
                  <ZonalOfficerDashboard />
                </ProtectedRoute>
              }
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App; 
