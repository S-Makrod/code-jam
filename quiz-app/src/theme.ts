import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#DECBB7',
      },
      text: {
        primary: '#5C5552'
      },
      background: {
        default: '#fff'
      }
    },
})

export const getTheme = (light: boolean) => {
    return light? lightTheme : darkTheme
}