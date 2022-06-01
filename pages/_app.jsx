import '../styles/globals.css'
import ButtonAppBar from '../components/navigation/ButtonAppBar'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
import Head from 'next/head';

const customTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png"/>
                <meta name="theme-color" content="#2A6A2D"/>
            </Head>
            <ThemeProvider theme={customTheme}>
                <CssBaseline/>
                <ButtonAppBar/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>

    )
}

export default MyApp
