import { Button, Container, Box } from "@mui/material";


export default function Introduction() {
    return (
        <Box height="100vh" id="mainBox">

            <div class="top_center">
                <h1>Top Center</h1>
            </div>


            <div class="bottom">
                <div class="bottom_left">
                    <h1>Bottom left</h1>
                </div>

                <div class="bottom_center">
                    <h1>Bottoms center</h1>
                </div>

                <div class="bottom_right">
                    <h1>Bottom right</h1>
                </div>
            </div>

        </Box>

    );
}