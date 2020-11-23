import React from 'react';
import Paper from '@material-ui/core/Paper';
import './App.css';
import LandingPage from './features/LandingPage';

function App() {
  return (
    <div className="App">
      <Paper style={{
        flexGrow: 1,
        height: '100vh',
        width: '100vw',
        backgroundColor: 'transparent'
      }}>
        <LandingPage />
      </Paper>
    </div>
  );
}

export default App;
