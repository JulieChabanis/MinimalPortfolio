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
      400: "#b4dbda",
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
      400: "#191919",
      500: "#cde7e6",
    },
  }
  : {
    primary: {
      100: "#F266AB",
      200: "#e1d1ff", 
      300: "#B799FF",
      400: "#e1d1ff",
      500: "#b799ff",
    },
    grey: {
      100: "#191919",
      200: "#C4DFDF", 
      300: "#C4DFDF",
      400: "#F5F0EC",
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
          fontSize: "3.2rem",
        },
        "@media (min-width: 601px)": {
          fontSize: "4.4rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "5.9rem", 
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
        color: mode === "dark" ? colors.blue[500] :  colors.primary[500],
      }, 

      // Subtitle 2
      h3: {
        fontFamily: ["lato", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "3.1rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "4.5rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "5.7rem",
        },
        fontWeight:800,
        lineHeight: 1,
        color: mode === "dark" ? colors.grey[100] : colors.grey[100],
      },

      // Based in Montpellier
      h4: {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        fontSize : 17,
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
          fontSize: "1rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "1.1rem",
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
          fontSize: "0.8rem", 
        },
        fontWeight: 200,
        lineHeight: 2, 
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },

      // NavBar
      h7: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 400, 
        color: mode === "light" ? colors.grey[100] : colors.grey[100],
      },
      // Titles Section 
      h8: {
        fontFamily: ["lato", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "4rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "5.5rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "6.5rem",
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
          fontSize: "0.9rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "1rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "1.1rem",
        },
        fontWeight:800,
        color: mode === "dark" ? colors.grey[100] : colors.grey[100],
      },
      h11: {
        fontFamily: ["Lato", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "0.9rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "1rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "1.1rem",
        },
        fontWeight:700,
        color: mode === "dark" ? colors.grey[100] : colors.grey[100],
      },
      // Card Portfolio Title
      h12: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        color: "black",
        fontSize: 45,
        fontWeight: 800,
        lineHeight: 1,

        "@media (max-width: 1637px)" : {
          fontSize: "1.7rem"
        }
      },
      // Card Portfolio Category
      h13: {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        fontSize : 25,
        fontWeight: 100,
        fontStyle: "italic",
        color: mode === "dark" ? colors.blue[500] :  colors.primary[200],
     
        "@media (max-width: 1637px)" : {
          fontSize: "1.3rem"
        }
     
      }, 
      // Card Portfolio Describe
      h14: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        color: "black",
        fontSize: 19,
        fontWeight: 800,
        lineHeight: 1.3,

        "@media (max-width: 1637px)" : {
          fontSize: "1rem"
        }
      },
      // Card Portfolio keywords
      h15 : {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        fontSize : 22,
        fontWeight: 200,
        fontStyle: "italic",
        color: "#191919",
     
        "@media (max-width: 1637px)" : {
          fontSize: "1.rem"
        }
      },
      // item Section Portfolio
      h16 : {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        "@media (max-width: 600px)": {
          fontSize: "1.7rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "1.8rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "2rem",
        },
        fontStyle: "italic",
        fontWeight: 200,
        lineHeight: 1.4,
        color: mode === "dark" ? colors.grey[100] : colors.grey[100],
      },
      // resume education title
      h17 : {
        fontFamily: ["Lato", "sans-serif"].join(","),
        "@media (max-width: 600px)": {
          fontSize: "1.3rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "1.4rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "1.4rem",
        },
        fontWeight: 700,
        lineHeight: 1.1,
        paddingBottom: "0.3rem",
        color: mode === "dark" ? colors.grey[400] : colors.grey[100],
      },
      // resume education date
      h18: {
        fontFamily: ["Lato", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "0.85rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "0.85rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "0.9rem",
        },
        fontWeight:800,
        paddingBottom: "0.2rem",
        color: mode === "dark" ? colors.blue[500] : colors.primary[200],
      },
      // resume education society
      h19: {
        fontFamily: ["Lato", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "0.8rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "0.9rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "0.9rem",
        },
        fontWeight:800,
        paddingBottom: "0.5rem",
        color: mode === "dark" ? colors.grey[400] : colors.grey[100],
      },
      // resume education desc
      h20: {
        fontFamily: ["Martian Mono", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "0.7rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "0.7rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "0.65rem",
        },
        fontWeight:400,
        lineHeight: 1.6,
        color: mode === "dark" ? colors.grey[400] : colors.grey[100],
      },
        // title section in Resume Section
      h21: {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        "@media (max-width: 600px)": {
         fontSize: "2.2rem",
        },
        "@media (min-width: 601px)": {
          fontSize: "3rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "3.5rem", 
        },
        fontWeight: 100,
        fontStyle: "italic",
        color: mode === "dark" ? "#8ec9c8" :  colors.primary[500],
      },
      // skills section title
      h22 : {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        "@media (max-width: 600px)": {
          fontSize: "1.6rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "1.7rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "1.8rem",
        },
        fontStyle: "italic",
        fontWeight: 200,
        color: mode === "dark" ? colors.blue[200] : colors.grey[100],
      },
      // Skills Subtitle
      h23: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        color: mode === "dark" ? colors.grey[100] : colors.grey[100],
        fontWeight: 800,
        fontSize: "1.1rem",
        lineHeight: 1.2,

        "@media (max-width: 1410px)" : {
          fontSize: "1rem"
        },
      },
      // Skills desc
      h24: {
        fontFamily: ["Martian Mono", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "0.7rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "0.75rem", 
        },
        fontWeight: 200,
        lineHeight: 1.3, 
        color: mode === "dark" ? colors.grey[100] : colors.grey[100],
      },
      // Contact Title
      h25: {
        fontFamily: ["Cormorant Garamond", "sans-serif"].join(","),
        "@media (max-width: 600px)": {
          fontSize: "3rem",
        },
        "@media (min-width: 601px)": {
          fontSize: "5rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "6rem", 
        },
        fontWeight: 100,
        fontStyle: "italic",
        lineHeight: 1, 
        color: mode === "dark" ? colors.blue[500] :  colors.primary[500],
      },
      // Contact subtitle
      h26: {
        fontFamily: ["lato", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "2.8rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "5rem", 
        },
        "@media (min-width: 1300px)": {
          fontSize: "6rem",
        },
        fontWeight:800,
        lineHeight: 0.9,
        color: mode === "dark" ? colors.blue[500] :  colors.grey[100],
      },
      // Footer
      h27: {
        fontFamily: ["Martian Mono", "sans-serif"].join(","), 
        "@media (max-width: 600px)": {
          fontSize: "0.7rem", 
        },
        "@media (min-width: 601px)": {
          fontSize: "0.75rem", 
        },
        fontWeight: 300,
        lineHeight: 1.3, 
        color: mode === "dark" ? colors.blue[500] : colors.grey[100],
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