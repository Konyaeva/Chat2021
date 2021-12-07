import { REMOVE_CONVERSATION } from "../types";
import {
  SEND_MESSAGE,
  DELETE_MESSAGE_BY_ID,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  GET_MESSAGES,
} from "./types";

const initialState = {
  messages: {},
  messagesLoading: false,
  messagesError: null,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            { ...action.payload.message, id: new Date().toISOString() },
          ],
        },
      };

    case DELETE_MESSAGE_BY_ID:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };

    case REMOVE_CONVERSATION:
      return {
        ...state,
        messages: Object.entries(state.messages).reduce((acc, [key, value]) => {
          if (key === action.payload) {
            return acc;
          }

          acc[key] = value;

          return acc;
        }, {}),
      };

    case GET_MESSAGES:
      return { ...state, messagesLoading: true, messagesError: null };

    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messagesLoading: false,
        messages: action.payload,
      };

    case GET_MESSAGES_ERROR:
      return {
        ...state,
        messagesLoading: false,
        messagesError: action.payload,
      };
    default:
      return state;
  }
};
