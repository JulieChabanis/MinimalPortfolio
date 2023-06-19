import React from "react";
import { MenuItem, SwipeableDrawer, ListItemText, IconButton } from "@mui/material";
import { Link } from "react-scroll";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./SwipeableDrawerMenu.module.css";
import { useTheme } from "@mui/material/styles";

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
      <MenuItem>
        <Link to="heropage-section" smooth={true} duration={200} className={styles.navLink}>
          <ListItemText style={theme.typography.h6}>Home</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="work-section" smooth={true} duration={200} className={styles.navLink}>
          <ListItemText style={theme.typography.h6}>Experience</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="skills-section" smooth={true} duration={200} className={styles.navLink}>
          <ListItemText style={theme.typography.h6}>Skills</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="portfolio" smooth={true} duration={200} className={styles.navLink}>
          <ListItemText style={theme.typography.h6}>Portfolio</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="contact" smooth={true} duration={200} className={styles.navLink}>
          <ListItemText style={theme.typography.h6}>Contact</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem>
        <a href="https://github.com/JulieChabanis" target="_blank" rel="noopener noreferrer">
          <IconButton className={styles.navSwipeableIcons}>
            <GitHubIcon />
          </IconButton>
        </a>
      </MenuItem>
      <MenuItem>
        <a href="https://www.linkedin.com/in/julie-chabanis-80695690/" target="_blank" rel="noopener noreferrer">
          <IconButton className={styles.navSwipeableIcons}>
            <LinkedInIcon />
          </IconButton>
        </a>
      </MenuItem>
    </SwipeableDrawer>
  );
};

export default SwipeableDrawerMenu;
