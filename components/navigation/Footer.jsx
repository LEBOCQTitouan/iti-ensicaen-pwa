import {Container, Typography} from "@mui/material";

export default function Footer() {

    return (
        <Container
            maxWidth="false"
            sx={{
                bgcolor: "#000000",
                position: "absolute",
                width: "100vw",
                bottom: "0",
                textAlign: "center"
            }}>
            <Typography variant="overline" sx={{color: "text.secondary"}}>2022 &copy; Ensicaen</Typography>
        </Container>
    )
}