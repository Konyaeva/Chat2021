import { createContext, useState, useCallback } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const themesMUI = {
  dark: createTheme({
    palette: {
      primary: {
        main: "#9a9fa1",
      },
      secondary: {
        main: "#2b5278",
      },
    },
  }),
  light: createTheme({
    palette: {
      primary: {
        main: "#9a9fa1",
      },
      secondary: {
        main: "#2b5278",
      },
    },
  }),
};

const themes = {
  dark: {
    color: "#000",
  },
  light: {
    color: "#fff",
  },
};

export const ThemeContext = createContext();

export const CustomThemeProvider = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState({
    theme: themes[initialTheme],
    name: initialTheme,
  });

  const themeSetter = useCallback((name) => {
    if (themes[name]) {
      setTheme({
        theme: themes[name],
        name,
      });
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeSetter,
      }}
    >
      <ThemeProvider theme={themesMUI[initialTheme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
