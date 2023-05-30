import styles from "./Navbar.module.css";
import { Box, List, ListItem, ListItemText, useTheme, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const NavBar = () => {
  const theme = useTheme();
  

  return (
    <motion.nav
      className={styles.navBar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box className={styles.logo}>
      <Link to="/" smooth={true} duration={500} className={styles.navLink}>
        JC
      </Link>
      </Box>
      <List className={styles.navList}>
          <ListItem>
              <Link to="/experience" className={styles.navLink}>
                <ListItemText style={theme.typography.h6}>Experience</ListItemText>
              </Link>
            </ListItem>
        <ListItem>
          <Link to="skills" smooth={true} duration={500}>
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
    </motion.nav>
  );
};

export default NavBar;
