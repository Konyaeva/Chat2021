import {
  CREATE_CONVERSATION,
  HANDLE_CHANGE_MESSAGE_VALUE,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
  GET_CONVERSATIONS,
} from "./types";
import { REMOVE_CONVERSATION } from "../types";

export const createConversation = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
});

export const removeConversationById = (conversationId) => ({
  type: REMOVE_CONVERSATION,
  payload: conversationId,
});

export const getConversationsStart = () => ({
  type: GET_CONVERSATIONS,
});

export const getConversationsSuccess = (conversations) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: conversations,
});

export const getConversationsError = (error) => ({
  type: GET_CONVERSATIONS_ERROR,
  payload: error,
});
