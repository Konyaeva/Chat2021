import { handleChangeMessageValue } from "../conversations";
import {
  sendMessage,
  getConversationsStart,
  getConversationsSuccess,
  getConversationsError,
} from "./actions";

export const sendMessageWithBot = (message, roomId) => (dispatch, getState) => {
  const cansel = dispatch(sendMessage(message, roomId));
  dispatch(handleChangeMessageValue("", roomId));

  // setTimeout(() => {
  //   cansel();
  // }, 500);

  if (message.author === "User") {
    setTimeout(() => {
      dispatch(
        sendMessage({ author: "Bot", message: "Hello bot from thunk" }, roomId)
      );
    }, 500);
  }
};

export const getMessagesFB = () => (dispatch, _, api) => {
  dispatch(getConversationsStart());

  api
    .getMessagesApi()
    .then((snapshot) => {
      const messages = {};

      snapshot.forEach((snap) => {
        messages[snap.key] = Object.values(snap.val());
      });

      dispatch(getConversationsSuccess(messages));
    })
    .catch((e) => dispatch(getConversationsError(e)));
};
