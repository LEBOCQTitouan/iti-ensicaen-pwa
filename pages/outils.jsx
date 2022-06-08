import Head from "next/head";
import {useRouter} from "next/router";
import {Box, Container} from "@mui/material";
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


export default function Introduction() {
    const router = useRouter();

    const itemData = [
        {
            src: '/img/AngularLogo.png',
            title: 'Angular',
        },

        {
            src: "/img/ReactLogo.png",
            title: 'React',
        }
    ]

    return (
        <Container>
            <Head>
                <title>Outils</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Box height="100vh" id="mainBox" onClick={() => {
                    router.push("/outils#slide2")
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <h1>Les Outils</h1>
                            <ImageList sx={{width: 400, height: 300}} cols={2} rowHeight={164}>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar position="below" title={item.title}/>
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <h1>React</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.
                            </p>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <h1>Angular</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.
                            </p>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <h1>Our Choice</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.
                            </p>
                        </Grid>
                    </Grid>
                </Box>
            </main>
        </Container>
    )
}