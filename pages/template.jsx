import { Button, Container, Box } from "@mui/material";
import Grid from '@mui/material/Grid';



export default function Introduction() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <div class="top_center">
                    <h1>Top Center</h1>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <div class="bottom_left">
                    <h1>Bottom left</h1>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <div class="bottom_center">
                    <h1>Bottoms center</h1>
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <div class="bottom_right">
                    <h1>Bottom right</h1>
                </div>
            </Grid>
        </Grid>
    );
}