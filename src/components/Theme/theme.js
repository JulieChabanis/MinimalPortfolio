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
      500: "#b799ff",
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
      
      // Hello, Bonjour ...
      h1: {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        "@media (max-width: 600px)": {
          fontSize: "3.5rem",
        },
        "@media (min-width: 601px)": {
          fontSize: "5rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "7.3rem", 
        },
        fontWeight: 100,
        fontStyle: "italic",
        lineHeight: 1.5, 
        color: mode === "dark" ? colors.blue[500] :  colors.primary[500],
      },

      // subtitle 1
      h2: {
        fontFamily: ["Martian Mono", "sans-serif"].join(","),
        "@media (max-width: 600px)": {
          fontSize: "1rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "1rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "1.6rem",
        },
        fontWeight: 500,
        color: mode === "light" ? colors.grey[100] : colors.grey[500],
      }, 

      // Subtitle 2
      h3: {
        fontFamily: ["lato", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "3.4rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "5.5rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "7rem",
        },
        fontWeight:800,
        lineHeight: 1,
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },

      // Based in Montpellier
      h4: {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        fontSize : 20,
        fontWeight: 100,
        fontStyle: "italic",
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },

      // "Julie Chabanis"
      h5: {
        fontFamily: ["Martian Mono", "sans-serif"].join(","),
        fontWeight: 100,
        "@media (max-width: 600px)": {
          fontSize: "0.8rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "1.1rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "1.3rem",
        },
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },

      // Others texts
      h6: {
        fontFamily: ["Martian Mono", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "0.8rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "0.9rem", 
        },
        fontWeight: 200,
        lineHeight: 2, 
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },

      // NavBar
      h7: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 400, 
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },
      // Titles Section 
      h8: {
        fontFamily: ["lato", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "4.6rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "6rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "7rem",
        },
        fontWeight: 700,
        lineHeight: 1.3, 
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },
      // Other texts
      h9: {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "4rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "5rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "6rem",
        },
        fontStyle: "italic",
        fontWeight:400,
        color: mode === "dark" ? colors.blue[500] :  colors.primary[500],
      },
      h10: {
        fontFamily: ["Lato", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "1rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "1rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "1.1rem",
        },
        fontWeight:800,
        color: mode === "dark" ? colors.grey[100] : colors.grey[100],
      }
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