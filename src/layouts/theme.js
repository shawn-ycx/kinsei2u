import { createMuiTheme } from '@material-ui/core';

const palette = {
  primary: {
    main: '#303388',
    light: '#635db9',
    dark: '#000e5a',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#22a2dd',
    light: '#6ad3ff',
    dark: '#0073ab',
    contrastText: '#FFFDE7',
  },
  error: { main: '#f44336', contrastText: '#ffffff' },
};
const themeName = 'Minsk Curious Blue Dog';

export default createMuiTheme({ palette, themeName });
