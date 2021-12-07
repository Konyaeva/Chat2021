import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ChatPage,
  ProfilePage,
  GistsPage,
  LoginPage,
  SignUpPage,
} from "./pages";
import { firebaseApp } from "./api/firebase";
import { Header, PrivateRoute, PublicRoute } from "./components";
import { CustomThemeProvider } from "./theme-context";
import { store, persistor } from "./store/create-store";
import "./global.css";

const Root = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const isAuth = !!session?.email;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CustomThemeProvider initialTheme="light">
          <BrowserRouter>
            <Header session={session} />

            <Routes>
              <Route path="/" element={<div>main page</div>} />
              <Route
                path="/chat/*"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <ChatPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/sign-up"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <SignUpPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/gists"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <GistsPage />
                  </PrivateRoute>
                }
              />
              <Route path="/*" element={<h1>404</h1>} />
            </Routes>
          </BrowserRouter>
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
