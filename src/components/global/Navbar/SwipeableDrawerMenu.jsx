import React from "react";
import { MenuItem, SwipeableDrawer, ListItemText, IconButton } from "@mui/material";
import { Link } from "react-scroll";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./Navbar.module.css";
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
      PaperProps={{ style: { width: 150, height: 300 } }}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="heropage-section" smooth={true} duration={200} className={styles.navLink}>
          <ListItemText style={theme.typography.h6}>Home</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="work-section" smooth={true} duration={200} className={styles.navLink}>
          <ListItemText style={theme.typography.h6}>Experience</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="skills-section" smooth={true} duration={200} className={styles.navLink}>
          <ListItemText style={theme.typography.h6}>Skills</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="portfolio" smooth={true} duration={200} className={styles.navLink}>
          <ListItemText style={theme.typography.h6}>Portfolio</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="contact" smooth={true} duration={200} className={styles.navLink}>
          <ListItemText style={theme.typography.h6}>Contact</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton className={styles.navIcons}>
          <GitHubIcon />
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton className={styles.navIcons}>
          <LinkedInIcon />
        </IconButton>
      </MenuItem>
    </SwipeableDrawer>
  );
};

export default SwipeableDrawerMenu;
