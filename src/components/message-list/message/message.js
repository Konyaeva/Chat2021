import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { withCounter } from "../../../hocs/with-counter";
import { deleteMessageById } from "../../../store/messages";
import styles from "./message.module.css";

/* @TODO удалить */
export const Message = withCounter(
  ({ message, count, decrement, increment }) => {
    const dispatch = useDispatch();
    const { roomId } = useParams();

    return (
      <div
        className={classNames(styles.message, {
          [styles.currentMessage]: message.author === "User",
        })}
      >
        <h3>{message.message}</h3>
        <p>{message.author}</p>
        <p>12.03</p>
        <hr />
        <Button onClick={() => dispatch(deleteMessageById(message.id, roomId))}>
          Х
        </Button>
        {/* @TODO удалить
        <p>{count}</p>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button> */}
      </div>
    );
  }
);
