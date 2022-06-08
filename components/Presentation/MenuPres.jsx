import { List, ListSubheader } from "@mui/material"

const MenuPres = (props) => {
    return (
        <List
            component="nav"
            aria-labelledby="menu-presentation"
            subheader={
                <ListSubheader component="div" id="menu-sticky">  {props.title} </ListSubheader>
            }
        >{props.children}</List>
    )
}

export default MenuPres;