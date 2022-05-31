import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from "@mui/material/ListItemIcon";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BookIcon from '@mui/icons-material/Book';
import AddIcon from '@mui/icons-material/Add';
import ConstructionIcon from '@mui/icons-material/Construction';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import HomeIcon from '@mui/icons-material/Home';
import EditButton from '@mui/icons-material/Edit';
import Link from "next/link";
import Typography from "@mui/material/Typography";


export default function ButtonAppBar() {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (state) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(state);
    }

    const list = () => (<Box
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
    >
        <List>
            <Link href="/">
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Accueil"/>
                    </ListItemButton>
                </ListItem>
            </Link>
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
            <Link href="conclusion">
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <GolfCourseIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Conclusion"/>
                    </ListItemButton>
                </ListItem>
            </Link>
        </List>
    </Box>)

    return (<>
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Link href="/">
                            MyPWA
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        <Drawer
            open={open}
            onClose={toggleDrawer(false)}
        >
            {list()}
        </Drawer>
    </>);
}
