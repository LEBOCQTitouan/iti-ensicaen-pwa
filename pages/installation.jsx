import Head from "next/head";
import {Box, Container} from "@mui/material";
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import MenuPres from "../components/Presentation/MenuPres";
import MenuPresItem from "../components/Presentation/MenuPresItem";


export default function Introduction() {

    return (
        <Container>
            <Head>
                <title>Installation d&apos;une PWA</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Grid container spacing={10} columns={{sm: 8, md: 12}}>
                    <Grid item xs={8}>
                        <Container>
                            <h1>Installation d&apos;une PWA</h1>
                            <Box height="auto" marginBottom={10}>
                                <p>Il est extrêmement facile d&apos;installer une PWA. Que vous soyez sur ordinateur,
                                    tablette ou mobile, la méthode est identique.
                                </p>
                            </Box>
                            <Box height="auto" marginBottom={10}>
                                <h2 id="slide2">Sur navigateur</h2>
                                <p>Sur votre navigateur, cliquez sur l&apos;icône :</p>
                                <Image src="/img/dl_icon.png" width={50} height={50} alt="download icon"/>
                                <p>dans votre barre d&apos;adresse. La PWA sera ensuite installée dans vos
                                    applications.</p>
                            </Box>
                            <Box height="auto" marginBottom={10}>
                                <h2>Sur mobile ou tablette</h2>
                                <h3 id="slide3">Android</h3>
                                <p>Une fois le site ouvert dans votre navigateur, un message apparaît :</p>
                                <Image src="/img/android.png" width={150} height={25} alt="download icon"/>
                                <p>Cliquez dessus et la PWA sera installée et accessible depuis votre écran d&apos;acceuil.</p>
                                <h3 id="slide4">IOS / IpadOS</h3>
                                <p>Une fois le site ouvert sur Safari, cliquez sur l&apos;icone :</p>
                                <Image src="/img/share_icon.png" width={23} height={27} alt="share icon"/>
                                <p>puis cliquez sur <strong>&quot;ajouter à l&apos;écran d&apos;acceuil&quot;</strong>.
                                    L&apos;application
                                    sera directement ajoutée et accessible depuis votre écran d&apos;acceuil.</p>
                            </Box>
                        </Container>
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
                            <MenuPres title="Installer une PWA">
                                <MenuPresItem content="Sur ordinateur" linkedElement="#slide2"/>
                                <MenuPresItem content="Android" linkedElement="#slide3"/>
                                <MenuPresItem content="IOS / IpadOS" linkedElement="#slide4"/>
                            </MenuPres>
                        </Box>
                    </Grid>
                </Grid>
            </main>
        </Container>
    )
}
