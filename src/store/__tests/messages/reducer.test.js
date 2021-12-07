import {
  messagesReducer,
  sendMessage,
  deleteMessageById,
  getConversationsStart,
  getConversationsSuccess,
  getConversationsError,
} from "../../messages";
import { removeConversationById } from "../../conversations";

describe("message reducer", () => {
  it("send message", () => {
    const state = messagesReducer(
      { messages: {} },
      sendMessage({ author: "Bot", message: "Hello bot from thunk" }, "room1")
    );

    expect(state.messages.room1.length).toBe(1);
    expect(state.messages.room1[0].author).toBe("Bot");
    expect(state.messages.room1[0].message).toBe("Hello bot from thunk");
  });

  it("delete message by id", () => {
    const state = messagesReducer(
      {
        messages: {
          room1: [{ id: 1 }],
        },
      },
      deleteMessageById(1, "room1")
    );

    expect(state.messages.room1.length).toBe(0);
  });

  it("remove conversation messages", () => {
    const state = messagesReducer(
      {
        messages: {
          room1: [],
        },
      },
      removeConversationById("room1")
    );

    expect(state.messages.room1).toBeUndefined();
  });

  it("get messages start", () => {
    const state = messagesReducer(
      {
        messagesLoading: false,
        messagesError: "some error",
      },
      getConversationsStart()
    );

    expect(state.messagesLoading).toBeDefined();
    expect(state.messagesError).toBeNull();
  });

  it("get messages start success", () => {
    const MESSAGES = "test message";

    const state = messagesReducer(
      {
        messagesLoading: true,
        messages: {},
      },
      getConversationsSuccess(MESSAGES)
    );

    expect(state.messagesLoading).toBeFalsy();
    expect(state.messages).toBe(MESSAGES);
  });

  it("get messages start error", () => {
    const ERROR = "test error";

    const state = messagesReducer(
      {
        messagesLoading: true,
        messagesError: null,
      },
      getConversationsError(ERROR)
    );

    expect(state.messagesLoading).toBeFalsy();
    expect(state.messagesError).toBe(ERROR);
  });
});
