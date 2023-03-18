import { createTheme } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#4E97FD',
      dark: '#2756B6',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff6666',
    },
  },
});

export default theme;