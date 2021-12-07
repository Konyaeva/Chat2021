import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../theme-context";
import { firebaseApp } from "../../api/firebase";
import styles from "./header.module.css";

const signOut = () => {
  firebaseApp.auth().signOut();
};

export function Header({ session }) {
  const { theme, themeSetter } = useContext(ThemeContext);

  const email = session?.email;

  return (
    <div className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
        {email && (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/gists">Gists</Link>
            <button onClick={signOut}>Выход</button>
          </>
        )}

        {!email && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Sign up</Link>
          </>
        )}
      </nav>
      <div>
        <button
          disabled={theme.name === "light"}
          onClick={() => themeSetter("light")}
        >
          light
        </button>
        <button
          disabled={theme.name === "dark"}
          onClick={() => themeSetter("dark")}
        >
          dark
        </button>
      </div>

      <div>
        <h3 style={{ color: "#fff" }}>{email}</h3>
      </div>
    </div>
  );
}
