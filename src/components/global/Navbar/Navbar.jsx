import styles from "./Navbar.module.css";
import { Box, List, ListItem, ListItemText, useTheme, IconButton } from "@mui/material";
import { Link } from "react-scroll"; 
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const NavBar = () => {
  const theme = useTheme();
  

  return (
    <Box className={styles.navBar}>
      <Box className={styles.logo}>
      <Link to="heropage-section" smooth={true} duration={500} className={styles.navLink}>
        JC
      </Link>
      </Box>
      <List className={styles.navList}>
          <ListItem>
              <Link to="work-section" smooth={true} duration={500} className={styles.navLink}>
                <ListItemText style={theme.typography.h6}>Experience</ListItemText>
              </Link>
            </ListItem>
        <ListItem>
          <Link to="skills-section" smooth={true} duration={500}>
            <ListItemText style={theme.typography.h6}>Skills</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="portfolio" smooth={true} duration={500}>
            <ListItemText style={theme.typography.h6}>Portfolio</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="contact" smooth={true} duration={500}>
            <ListItemText style={theme.typography.h6}>Contact</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <IconButton className={styles.navIcons}>
            <GitHubIcon />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default NavBar;
