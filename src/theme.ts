import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main:'#EAE0D5',
    },
    secondary: {
      main: '#5E503F',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Mulish, sans-serif'
  },
  
});

export default theme;