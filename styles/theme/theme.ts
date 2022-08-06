import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
    body1: {
      fontSize: 18,
    },
  },
  palette: {
    primary: {
      main: '#146D63',
      // main: '#939393',
      dark: '#115D54',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          fontWeight: 'bold',
        },
      },
    },
  },
});
