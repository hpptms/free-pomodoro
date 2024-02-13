import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
      contrastText: '#212121',
    },
    background: {
      default: '#e0e0e0',
    },
  },
});

export default theme;