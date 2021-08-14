import { createTheme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;