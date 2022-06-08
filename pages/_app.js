import '../styles/globals.css'
import ButtonAppBar from '../components/navigation/ButtonAppBar'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#9abae6',
        },
        secondary: {
            main: '#F2CB05',
        },
    },
});

const styles = theme => ({
    badge: {
      margin: `0 ${theme.spacing.unit * 2}px`,
      background: `radial-gradient(circle at center, red 0, blue, green 100%)`
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
