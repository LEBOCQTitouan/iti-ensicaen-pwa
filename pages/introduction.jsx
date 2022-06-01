import Head from "next/head";
import {Box, Container, Grid} from "@mui/material";

export default function Introduction() {
    return (
        <Container>
            <Head>
                <title>Introduction</title>
                <meta name="description" content="Introduction page"/>
            </Head>
            <main>
                <Grid>
                    <Box>
                        <h1>Test</h1>
                    </Box>
                    <Box>
                        <p>
                            Le sujet de notre projet sera les PWA. Ce sujet nous a intéressait par son modernisme car
                            c’est
                            une technologie peu rependue à l’inverse de ses prédécesseurs : les applications mobiles ou
                            les
                            applications web.
                        </p>
                    </Box>
                </Grid>
            </main>
        </Container>
    )
}