import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";


// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
  ? {
    primary: {
      100: "#B799FF",
      200: "#B799FF", 
      300: "#B799FF",
      400: "#B799FF",
      500: "#B799FF",
    }, 
    grey: {
      100: "#f2f2f2",
      200: "#71dbaf", 
      300: "#71dbaf",
      400: "#71dbaf",
      500: "#71dbaf",
    },
  }
  : {
    primary: {
      100: "#F266AB",
      200: "#F266AB", 
      300: "#F266AB",
      400: "#F266AB",
      500: "#F266AB",
    },
    grey: {
      100: "#121212",
      200: "#C4DFDF", 
      300: "#C4DFDF",
      400: "#C4DFDF",
      500: "#C4DFDF",
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
        fontSize: "8rem",
        fontWeight: 100,
        fontStyle: "italic",
        color: mode === "dark" ? colors.primary[500] :  colors.grey[100],
      },
      h2: {
        fontFamily: ["lato", "sans-serif"].join(","),
        fontSize: "3rem",
        fontWeight: 400,
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      }, 
      h3: {
        fontFamily: ["lato", "sans-serif"].join(","), 
        fontSize : "6rem",
        fontWeight:600,
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },
      h4: {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        fontSize : "25px",
        fontWeight:100,
        fontStyle: "italic",
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },
      h5: {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        fontSize: "1.5rem",
        fontWeight: 100,
        fontStyle: "italic",
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },
      h6: {
        fontFamily: ["lato", "sans-serif"].join(","), 
        fontSize : "16px",
        fontWeight:600,
        color: mode === "light" ? colors.grey[100] : colors.grey[100],

      },
      body1: {
        fontFamily: ["lato", "sans-serif"].join(","), 
        fontSize : "18px",
        fontWeight:400,
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