import React, { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext  } from "../../Theme/theme";

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

const ThemeToggleButton = () => {
  const theme = useTheme(); 
  const colorMode = useContext(ColorModeContext)

  return (
    <Box>
      <Box     
        position="fixed" 
        top={25} 
        right={25}
        >
        <IconButton onClick={colorMode.toggleColorMode} sx={{ fontSize: 25 }}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeRoundedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default ThemeToggleButton;
