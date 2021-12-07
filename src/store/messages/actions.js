import {
  SEND_MESSAGE,
  DELETE_MESSAGE_BY_ID,
  DELETE_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  GET_MESSAGES,
} from "./types";

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
  meta: {
    delay: 2000,
  },
});

export const deleteMessageById = (messageId, roomId) => ({
  type: DELETE_MESSAGE_BY_ID,
  payload: { messageId, roomId },
});

// @TODO описать его в редюсере
export const deleteMessages = (roomId) => ({
  type: DELETE_MESSAGES,
  payload: roomId,
});

export const getConversationsStart = () => ({
  type: GET_MESSAGES,
});

export const getConversationsSuccess = (messages) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: messages,
});

export const getConversationsError = (error) => ({
  type: GET_MESSAGES_ERROR,
  payload: error,
});
