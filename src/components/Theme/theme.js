import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";


// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
  ? {
    primary: {
      100: "#B799FF",
      200: "#e1d1ff", 
      300: "#B799FF",
      400: "#B799FF",
      500: "#a8d5d4",
    }, 
    blue: {
      100: "#8ec9c8",
      200: "#9bcfce", 
      300: "#a8d5d4",
      400: "#b4dbda",
      500: "#c1e1e0",
      600: "#cde7e6",
    },
    grey: {
      100: "#F5F0EC",
      200: "#71dbaf", 
      300: "#c4f0db",
      400: "#71dbaf",
      500: "#cde7e6",
    },
  }
  : {
    primary: {
      100: "#F266AB",
      200: "#F266AB", 
      300: "#F266AB",
      400: "#F266AB",
      500: "#e1d1ff",
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
          default: "#191919", 
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
          default: "#F5F0EC"
        }, 
      }),
    },

    typography: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontSize: "0.75rem",

      h1: {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        "@media (max-width: 600px)": {
          fontSize: "5rem", // Taille pour le breakpoint sm
        },
        "@media (min-width: 601px)": {
          fontSize: "5rem", // Taille pour le breakpoint md
        },
        "@media (min-width: 1300px)": {
          fontSize: "7.3rem", // Taille pour le breakpoint md
        },
        fontWeight: 100,
        fontStyle: "italic",
        color: mode === "dark" ? colors.blue[500] :  colors.primary[500],
      },

      h2: {
        fontFamily: ["lato", "sans-serif"].join(","),
        fontSize: "3rem",
        "@media (max-width: 600px)": {
          fontSize: "2rem", // Taille pour le breakpoint sm
        },
        "@media (min-width: 960px)": {
          fontSize: "4rem", // Taille pour le breakpoint md
        },
        fontWeight: 400,
        color: mode === "light" ? colors.grey[100] : colors.blue[600],
      }, 
      h3: {
        fontFamily: ["lato", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "3.1rem", // Taille pour le breakpoint sm
        },
        "@media (min-width: 601px)": {
          fontSize: "4.6rem", // Taille pour le breakpoint md
        },
        "@media (min-width: 1300px)": {
          fontSize: "6rem", // Taille pour le breakpoint md
        },
        fontWeight:600,
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },
      h4: {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        fontSize : "20px",
        fontWeight:100,
        fontStyle: "italic",
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },
      h5: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        fontSize: "3.5rem",
        "@media (max-width: 600px)": {
          fontSize: "2.5rem", // Taille pour le breakpoint sm
        },
        fontWeight: 200,
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },
      h6: {
        fontFamily: ["lato", "sans-serif"].join(","), 
        fontSize : "16px",
        fontWeight:600,
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },
      h7: {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        fontSize: "10px",
        fontWeight:400, 
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
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