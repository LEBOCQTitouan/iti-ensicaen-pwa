import Head from "next/head";
import {Box, Container, Grid} from "@mui/material";
import MenuPres from "../components/Presentation/MenuPres";
import MenuPresItem from "../components/Presentation/MenuPresItem";

export default function Introduction() {
    return (
        <Container>
            <Head>
                <title>Introduction</title>
                <meta name="description" content="Introduction page"/>
            </Head>
            <main>
                <Grid container spacing={10} columns={{sm: 8, md: 12}}>
                    <Grid item xs={8}>
                        <Box>
                            <h1>Introduction</h1>
                        </Box>
                        <Box>
                            <h2 id="preambule">Préambule</h2>
                            <p>
                                La technologie des PWAs n’est encore que peu répandue à l’inverse de ses prédécesseurs.
                                On
                                distinguait auparavant deux types d’applications. D’abord les clients lourds, créés pour
                                une
                                plateforme spécifique, installés localement sur une machine et pouvant fonctionner hors
                                ligne et souvent plus riches en fonctionnalités. De l’autre côté, les clients légers ou
                                applications web. Ceux-ci sont accessibles à toute plateforme via internet mais ne sont
                                pas
                                accessibles lorsque l’utilisateur est hors ligne et disposent de moins de
                                fonctionnalités.
                            </p>
                        </Box>
                        <Box>
                            <h2 id="apparition">Apparition</h2>
                            <p>
                                C’est là qu’apparaissent les PWA, à la frontière entre client lourd et client léger,
                                elles permettent une flexibilité maximale en proposant à la fois une accessibilité à
                                tout type d’appareil peu importe l’état du réseau tout en donnant à l’utilisateur le
                                maximum de fonctionnalités, tout cela avec une seule base de code.
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{
                            display: {
                                xs: "none",
                                md: "block"
                            },
                            position: "sticky",
                            top: "10px",
                        }}>
                            <MenuPres title="Introduction">
                                <MenuPresItem content="Préambule" linkedElement="#preambule"/>
                                <MenuPresItem content="Apparition" linkedElement="#apparition"/>
                            </MenuPres>
                        </Box>
                    </Grid>
                </Grid>
            </main>
        </Container>
    )
}