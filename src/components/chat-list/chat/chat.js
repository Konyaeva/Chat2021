import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { AccountCircle } from "@mui/icons-material";
import { removeConversationById } from "../../../store/conversations";
import styles from "./chat.module.css";

const useStyles = makeStyles(() => {
  return {
    item: {
      "&.Mui-selected": {
        backgroundColor: "#2b5278",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#2b5278",
      },
    },
  };
});

export function Chat({ title, selected, handleListItemClick }) {
  const s = useStyles();

  const dispatch = useDispatch();

  return (
    <ListItem
      className={s.item}
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={title} />
        <ListItemText className={styles.text} primary="12.30" />
        <ListItemText
          className={styles.text}
          primary="X"
          onClick={() => dispatch(removeConversationById(title))}
        />
      </div>
    </ListItem>
  );
}
