import '../styles/globals.css'
import ButtonAppBar from '../components/navigation/ButtonAppBar'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#388e3c',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={customTheme}>
          <ButtonAppBar></ButtonAppBar>
          <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
