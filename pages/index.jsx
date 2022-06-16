import Head from 'next/head'
import {Box, Container, Grid, List, ListItem} from "@mui/material";
import Link from "next/link";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BookIcon from "@mui/icons-material/Book";
import AddIcon from "@mui/icons-material/Add";
import EditButton from "@mui/icons-material/Edit";
import ConstructionIcon from "@mui/icons-material/Construction";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function Home() {
    return (
        <Container>
            <Head>
                <title>Accueil</title>
                <meta name="description" content="Home page"/>
            </Head>
            <main>
                <Grid container flexDirection="column" justifyContent="center" alignItems="center" height="80vh">
                    <Box>
                        <h1 style={{textAlign: "center"}}>Bienvenue sur MyPWA</h1>
                    </Box>
                    <List>
                        <Link href="/introduction">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <RocketLaunchIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Introduction"/>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link href="/definition">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <BookIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Définition"/>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link href="/avantages">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AddIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Avantages"/>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link href="/creation">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <EditButton/>
                                    </ListItemIcon>
                                    <ListItemText primary="Creation"/>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link href="outils">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ConstructionIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Outils"/>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link href="installation">
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DownloadForOfflineIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Installation"/>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>
                </Grid>
            </main>
        </Container>
    )
}

