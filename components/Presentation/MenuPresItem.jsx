import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useRouter } from "next/router";

const MenuPresItem = (props) => {
    const router = useRouter();
    return (
    <ListItemButton onClick={() => {router.push(router.basePath + props.linkedElement)}}>
      <ListItemIcon>
        <ArrowRightIcon />
      </ListItemIcon>
      <ListItemText primary={props.content} />
    </ListItemButton>
  );
};

export default MenuPresItem;