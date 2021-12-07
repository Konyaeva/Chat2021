import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { createStore } from "./my-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getGistsApi, searchGistsByUserNameApi } from "../api/gists";
import { getMessagesApi, sendMessageApi } from "../api/messages";
import {
  getConversationsApi,
  updateConversationsApi,
} from "../api/conversations";
import { profileReducer } from "./profile";
import { messagesReducer } from "./messages";
import { conversationsReducer } from "./conversations";
import { gistsReducer } from "./gists";
import {
  logger,
  botSendMessage,
  timeScheduler,
  crashReporter,
  // thunk
} from "./middlewares";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["profile"],
};

export const reducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  conversations: conversationsReducer,
  gists: gistsReducer,
});

const persistreducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistreducer,
  compose(
    applyMiddleware(
      timeScheduler,
      crashReporter,
      botSendMessage,
      thunk.withExtraArgument({
        getGistsApi,
        searchGistsByUserNameApi,
        getMessagesApi,
        sendMessageApi,
        updateConversationsApi,
        getConversationsApi,
      }),
      logger
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
