import React from 'react';
import Routes from './Routes';
import Header from './components/Header';
import SideDrawer from './components/SideDrawer';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#209F85',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  status: {
    danger: 'orange',
  },
});



const App = () => (
  <ThemeProvider theme={theme}>
    <div className='App'>
      <Header />
      <Routes />
    </div>
  </ThemeProvider>
);

export default App;
