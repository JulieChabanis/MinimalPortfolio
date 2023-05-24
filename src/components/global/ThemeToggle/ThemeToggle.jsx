import React, { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../UItheme/theme";
import styles from './ThemeToggle.module.css';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

const ThemeToggleButton = () => {
  const theme = useTheme(); 
  const colors = tokens(theme.palette.mode); 
  const colorMode = useContext(ColorModeContext)

  return (
    <Box 
      display='flex'       
      justifyContent="flex-end"
      position="absolute"
      top={35}
      right={35}
      p={1}>
       <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? (
          <DarkModeOutlinedIcon className={styles.iconToggleTheme} />
        ) : (
          <LightModeRoundedIcon className={styles.iconToggleTheme} />
        )}
      </IconButton>
    </Box>
  );
};

export default ThemeToggleButton;
