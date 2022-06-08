import Head from "next/head";
import {Box, Container, Grid, List, ListItem, ListItemText} from "@mui/material";
import MenuPres from "../components/Presentation/MenuPres";
import MenuPresItem from "../components/Presentation/MenuPresItem";

export default function Introduction() {
    return (
        <Container>
            <Head>
                <title>Definition</title>
                <meta name="description" content="Definition page"/>
            </Head>
            <main>
                <Grid container spacing={10} columns={{sm: 8, md: 12}}>
                    <Grid item xs={8}>
                        <Box>
                            <h1>Definition</h1>
                        </Box>
                        <Box>
                            <h2 id="qualites">Qualités</h2>
                            <p>
                                Les PWA sont caractérisées par trois qualités :
                                <List>
                                    <ListItem>
                                        <ListItemText>
                                            <strong>Capacité :</strong> avec l’apparition de nouveaux standards web tels
                                            que WebAssembly,
                                            le web est aujourd’hui plus capable que jamais. Cette complétude en termes
                                            de capacités et de fonctionnalités n’était avant cela possible qu’avec les
                                            clients lourds.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            <strong>Fiabilité :</strong> bien qu&apos;elles puissent être installés, les
                                            PWA
                                            sont liés à une
                                            URL qui leur permet ainsi de se maintenir à jour. Les PWA ont aussi pour but
                                            d&apos;être rapides et réactives peu importe l&apos;état du réseau. Cela
                                            permet ainsi
                                            d&apos;augmenter la satisfaction des utilisateurs.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            <strong>Possibilité d&apos;être installé :</strong> les PWA installés
                                            apparaissent sur l&apos;écran
                                            d&apos;accueil ou le menu des applications. Elles sont ensuite ouvertes dans
                                            une
                                            fenêtre détachée du navigateur. Elles donnent ainsi l&apos;impression à
                                            l&apos;utilisateur qu&apos;elles sont des applications natives à la
                                            plateforme de
                                            l&apos;utilisateur.
                                        </ListItemText>
                                    </ListItem>
                                </List>
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
                                <MenuPresItem content="Qualités" linkedElement="#qualites"/>
                            </MenuPres>
                        </Box>
                    </Grid>
                </Grid>
            </main>
        </Container>
    )
}