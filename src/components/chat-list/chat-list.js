import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { List } from "@mui/material";
import {
  conversationsSelector,
  createConversation,
} from "../../store/conversations";
import { Chat } from "./chat";

export const ChatList = () => {
  const params = useParams();
  const conversations = useSelector(conversationsSelector);

  const dispatch = useDispatch();

  const createConversationByName = () => {
    const name = prompt("Введите название комнаты");

    const isValidName = !conversations.find(
      (conversation) => name === conversation.title
    );

    if (name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("не валидная комната");
    }
  };

  return (
    <List component="nav">
      <button onClick={createConversationByName}>create</button>
      {conversations.map((chat) => (
        <Link key={chat.title} to={`/chat/${chat.title}`}>
          <Chat title={chat.title} selected={params.roomId === chat.title} />
        </Link>
      ))}
    </List>
  );
};
