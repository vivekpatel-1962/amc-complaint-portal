# AMC Complaint Portal

A modern web application for managing and tracking civic complaints in the Ahmedabad Municipal Corporation area.

## Features

- **User Authentication**: Secure login and registration system
- **Role-based Access**: Different dashboards for citizens, ward officers, and administrators
- **Complaint Management**: Submit, track, and manage civic complaints
- **Real-time Updates**: Get status updates on complaint resolution
- **Location Integration**: Submit complaints with location details
- **Photo Upload**: Attach photos with complaints for better clarity
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend
- React.js
- Material-UI
- Context API for state management
- Responsive design with modern animations

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository
```bash
git clone https://github.com/vivekpatel-1962/amc-complaint-website.git
cd amc-complaint-website
```

2. Install frontend dependencies
```bash
cd frontend
npm install
```

3. Install backend dependencies
```bash
cd ../backend
npm install
```

4. Start the backend server
```bash
npm start
```

5. Start the frontend development server
```bash
cd ../frontend
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
amc-complaint-portal/
├── frontend/                # React frontend
│   ├── public/             # Public assets
│   └── src/
│       ├── components/     # Reusable components
│       ├── context/       # Context providers
│       ├── pages/         # Page components
│       └── theme.js       # Material-UI theme
└── backend/
    ├── models/            # Database models
    ├── routes/           # API routes
    └── server.js         # Express server
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Still Incomplete

