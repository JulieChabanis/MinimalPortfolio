import React from "react";
import { ListItem, SwipeableDrawer, ListItemText, Box, IconButton, List, useTheme } from "@mui/material";
import { Link } from "react-scroll";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./SwipeableDrawerMenu.module.css";
import CloseIcon from "@mui/icons-material/Close";

const SwipeableDrawerMenu = ({ menuOpen, handleMenuClose }) => {
  const theme = useTheme();

  return (
    <SwipeableDrawer
      anchor="right"
      keepMounted
      onOpen={() => {}}
      open={menuOpen}
      onClose={handleMenuClose}
      PaperProps={{ style: { width: 160, height: 395 } }}
    >

      {/* Close Button */}
      <Box        
        sx={{ 
          display: 'flex', 
          justifyContent: "flex-end", 
          paddingRight: "15px",
          paddingTop: "15px",
        }}
      >
        <IconButton className={styles.closeButton} onClick={handleMenuClose}>
          <CloseIcon />
        </IconButton>
      </Box> 

      {/*Items in Menu Burger*/}
      <List>
      <ListItem>
        <Link to="heropage-section" smooth={true} duration={200} className={styles.navSwipeableLink}>
          <ListItemText  className={styles.listItemText} sx={{ fontSize: theme.typography.h7 }}>Home</ListItemText>
        </Link>
      </ListItem>

      <ListItem>
        <Link to="about-section" smooth={true} duration={200} className={styles.navSwipeableLink}>
          <ListItemText className={styles.listItemText}  sx={{ fontSize: theme.typography.h7}}>About</ListItemText>
        </Link>
      </ListItem>

      <ListItem>
        <Link to="resume-section" smooth={true} duration={200} className={styles.navSwipeableLink}>
          <ListItemText  className={styles.listItemText} sx={{ fontSize: theme.typography.h7}}>Resume</ListItemText>
        </Link>
      </ListItem>

      <ListItem>
        <Link to="portfolio" smooth={true} duration={200} className={styles.navSwipeableLink}>
          <ListItemText className={styles.listItemText} sx={{ fontSize: theme.typography.h7}}>Portfolio</ListItemText>
        </Link>
      </ListItem>

      <ListItem>
        <Link to="contact" smooth={true} duration={200} className={styles.navSwipeableLink}>
          <ListItemText  className={styles.listItemText}  sx={{fontSize: theme.typography.h7}}>Contact</ListItemText>
        </Link>
      </ListItem>
      </List>

      {/*Icons Row */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: "30px"
        }}  
      >
      <ListItem sx={{ width: "15%"}}>
        <a href="https://github.com/JulieChabanis" target="_blank" rel="noopener noreferrer">
          <IconButton className={styles.navSwipeableIcons}>
            <GitHubIcon />
          </IconButton>
        </a>
      </ListItem>
      <ListItem sx={{ width: "25%"}}>
        <a href="https://www.linkedin.com/in/julie-chabanis-80695690/" target="_blank" rel="noopener noreferrer">
          <IconButton className={styles.navSwipeableIcons}>
            <LinkedInIcon />
          </IconButton>
        </a>
      </ListItem>
      </Box>

      {/*Copiright mention */}
      <Box 
        style={theme.typography.h1} 
        sx={{ 
          display: 'flex', 
          justifyContent: "flex-end", 
          paddingRight: "26px",
        }}
        >
        Copyright © 2023
      </Box>

    </SwipeableDrawer>
  );
};

export default SwipeableDrawerMenu;
