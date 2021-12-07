import { Navigate } from "react-router-dom";

export function PrivateRoute({ isAuth, to = "/", children }) {
  return !!isAuth ? children : <Navigate replace to={to} />;
}

export function PublicRoute({ isAuth, to = "/", children }) {
  return !isAuth ? children : <Navigate replace to={to} />;
}
