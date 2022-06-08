import '../styles/globals.css'
import ButtonAppBar from '../components/navigation/ButtonAppBar'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
import Head from 'next/head';
import Footer from "../components/navigation/Footer";

const customTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#9abae6',
        },
        secondary: {
            main: '#f2cb05',
        },
    },
});

function MyApp({Component, pageProps}) {
    return (
        <html lang="fr">
        <Head>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" href="/icons/icon-192x192.png"/>
            <meta name="theme-color" content="#99bae6"/>
        </Head>
        <ThemeProvider theme={customTheme}>
            <CssBaseline/>
            <ButtonAppBar/>
            <Component {...pageProps} />
            <Footer/>
        </ThemeProvider>
        </html>

    )
}

export default MyApp
