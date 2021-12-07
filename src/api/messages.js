import { nanoid } from "nanoid";
import { db } from "./firebase";

export const getMessagesApi = () => db.ref("messages").get();

// @TODO сделать санк
export const sendMessageApi = ({ author, message }, roomId) =>
  db.ref("messages").child(roomId).push({ author, message, id: nanoid() });
