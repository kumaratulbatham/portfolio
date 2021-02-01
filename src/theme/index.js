import { createMuiTheme } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  // palette: {
  //   background: {
  //     dark: '#F4F6F8',
  //     default: colors.common.white,
  //     paper: colors.common.white,
  //     sidebar: "#2f353a"
  //     // paper: colors.grey[700]
  //   },
  //   primary: {
  //     main: colors.common.white
  //   },
  //   secondary: {
  //     main: colors.indigo[500]
  //   },
  //   text: {
  //     primary: colors.blueGrey[900],
  //     secondary: colors.blueGrey[600]
  //   }
  // },
  shadows,
  typography
});

export default theme;
