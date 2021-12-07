import { db } from "./firebase";

export const getConversationsApi = () => db.ref("conversations").get();

export const updateConversationsApi = (value, roomId) =>
  db.ref("conversations").child(roomId).update({ value, title: roomId });

// @TODO сделать санк
export const addConversation = (value) => {
  return db.ref("conversations").child(value).set({ title: value, value: "" });
};
