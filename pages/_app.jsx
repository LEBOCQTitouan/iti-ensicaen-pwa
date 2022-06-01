import '../styles/globals.css'
import ButtonAppBar from '../components/navigation/ButtonAppBar'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";

const customTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline/>
            <ButtonAppBar/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
