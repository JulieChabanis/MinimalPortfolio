import React, { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext  } from "../../Theme/theme";

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

const ThemeToggleButton = () => {
  const theme = useTheme(); 
  const colorMode = useContext(ColorModeContext)

  return (
    <Box
    position="fixed"
    right={25}
    top={25}
    zIndex={1}
    >
        <IconButton onClick={colorMode.toggleColorMode} sx={{ fontSize: 25 }}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeRoundedIcon />
          )}
        </IconButton>
    </Box>
  );
};

export default ThemeToggleButton;
