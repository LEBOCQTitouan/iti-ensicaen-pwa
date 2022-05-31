import styles from "../styles/Home.module.css";
import Head from "next/head";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";

export default function Introduction() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Definition</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Container>
                    <Box height="100vh">
                        <h1 id="slide1">Definition</h1>
                        <h2>Qu&amp;aposest ce qu&amp;aposune PWA ?</h2>
                    </Box>
                </Container>
            </main>
        </div>
    )
}