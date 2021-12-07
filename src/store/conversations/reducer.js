import { REMOVE_CONVERSATION } from "../types";
import {
  HANDLE_CHANGE_MESSAGE_VALUE,
  CREATE_CONVERSATION,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
  GET_CONVERSATIONS,
} from "./types";

const initialState = {
  conversationsLoading: false,
  conversationsError: null,
  conversations: [],
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        conversations: state.conversations.map((conversation) => {
          return conversation.title === action.payload.roomId
            ? { ...conversation, value: action.payload.value }
            : conversation;
        }),
      };
    case REMOVE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation.title !== action.payload
        ),
      };

    case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [
          ...state.conversations,
          { title: action.payload, value: "" },
        ],
      };

    case GET_CONVERSATIONS:
      return { ...state, conversationsLoading: true, conversationsError: null };

    case GET_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        conversationsLoading: false,
        conversations: action.payload,
      };

    case GET_CONVERSATIONS_ERROR:
      return {
        ...state,
        conversationsLoading: false,
        conversationsError: action.payload,
      };
    default:
      return state;
  }
};
