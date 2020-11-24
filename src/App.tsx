import React from 'react';
import Paper from '@material-ui/core/Paper';
import './App.css';
import LandingPage from './features/LandingPage';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Paper style={{
          flexGrow: 1,
          height: '100vh',
          width: '100vw',
          backgroundColor: 'transparent'
        }}>
          <LandingPage />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
