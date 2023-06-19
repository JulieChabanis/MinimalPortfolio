import React from "react";
import { ListItem, SwipeableDrawer, ListItemText, Box, IconButton } from "@mui/material";
import { Link } from "react-scroll";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./SwipeableDrawerMenu.module.css";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

const SwipeableDrawerMenu = ({ menuOpen, handleMenuClose }) => {
  const theme = useTheme();

  return (
    <SwipeableDrawer
      anchor="right"
      anchorEl={null}
      keepMounted
      open={menuOpen}
      onClose={handleMenuClose}
      PaperProps={{ style: { width: 150, height: 350 } }}
    >
      <Box>
        <IconButton className={styles.closeButton} onClick={handleMenuClose}>
          <CloseIcon />
        </IconButton>
      </Box>   
      <ListItem>
        <Link to="heropage-section" smooth={true} duration={200} className={styles.navSwipeableLink}>
          <ListItemText style={theme.typography.h6}>Home</ListItemText>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="work-section" smooth={true} duration={200} className={styles.navSwipeableLink}>
          <ListItemText style={theme.typography.h6}>Experience</ListItemText>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="skills-section" smooth={true} duration={200} className={styles.navSwipeableLink}>
          <ListItemText style={theme.typography.h6}>Skills</ListItemText>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="portfolio" smooth={true} duration={200} className={styles.navSwipeableLink}>
          <ListItemText style={theme.typography.h6}>Portfolio</ListItemText>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="contact" smooth={true} duration={200} className={styles.navSwipeableLink}>
          <ListItemText style={theme.typography.h6}>Contact</ListItemText>
        </Link>
      </ListItem>
      <ListItem>
        <a href="https://github.com/JulieChabanis" target="_blank" rel="noopener noreferrer">
          <IconButton className={styles.navSwipeableIcons}>
            <GitHubIcon />
          </IconButton>
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.linkedin.com/in/julie-chabanis-80695690/" target="_blank" rel="noopener noreferrer">
          <IconButton className={styles.navSwipeableIcons}>
            <LinkedInIcon />
          </IconButton>
        </a>
      </ListItem>
    </SwipeableDrawer>
  );
};

export default SwipeableDrawerMenu;
