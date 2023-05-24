import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";


// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
  ? {
    grey: {
      100: "#B799FF",
      200: "#B799FF", 
      300: "#B799FF",
      400: "#B799FF",
      500: "#B799FF",
    }, 
    primary: {
      100: "#ACBCFF",
      200: "#ACBCFF", 
      300: "#ACBCFF",
      400: "#ACBCFF",
      500: "#ACBCFF",
    },
  }
  : {
    grey: {
      100: "#C4DFDF",
      200: "#C4DFDF", 
      300: "#C4DFDF",
      400: "#C4DFDF",
      500: "#C4DFDF",
    }, 
    primary: {
      100: "#F266AB",
      200: "#F266AB", 
      300: "#F266AB",
      400: "#F266AB",
      500: "#F266AB",
    },

  }),
}); 

// theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode); 

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
      ? {

        // dark mode
        primary: {
          main: colors.primary[500],
        }, 
        secondary: {
          main: colors.grey[500],
        }, 
        neutral: {
          dark: colors.grey[700],
          main: colors.grey[500],
          light: colors.grey[300],
        }, 
        background: {
          default: "#121212", 
        }, 
      } : {
        // light mode
        primary: {
          main: colors.primary[500],
        }, 
        secondary: {
          main: colors.grey[500],
        }, 
        neutral: {
          dark: colors.grey[700],
          main: colors.grey[500],
          light: colors.grey[300],
        }, 
        background: {
          default: "#f2f2f2"
        }, 
      }),
    },

    typography: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontSize: "0.75rem",
      h1: {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        fontSize: "3.75rem",
        fontWeight: 100,
        fontStyle: "italic",
      },
      h2: {
        fontFamily: ["lato", "sans-serif"].join(","),
        fontSize: "7.5rem",
        fontWeight: 500,
      }, 
      h3: {
        fontFamily: ["lato", "sans-serif"].join(","), 
        fontSize : "18px",
        fontWeight:400,
      },
      body1: {
        fontFamily: ["lato", "sans-serif"].join(","),
        fontSize: "0.75rem",
        fontWeight: 300,
      }
    }
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {}
}); 

export const useMode = () => {
  const [mode, setMode] = useState("dark"); 

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => 
      setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  ); 

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); 

  return [theme, colorMode]; 

}