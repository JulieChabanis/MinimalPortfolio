import styles from "./Navbar.module.css";
import { Box, List, ListItem, ListItemText, useTheme, IconButton } from "@mui/material";
import { Link } from "react-scroll"; 
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import React from "react";

const NavBar = () => {
  const theme = useTheme();
  
  return (
    <motion.nav
      className={styles.navBar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box className={styles.logo}>
        <Link to="heropage-section" smooth={true} duration={200} className={styles.navLink}>
          JC
        </Link>
      </Box>
      <List className={styles.navList}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ListItem>
            <Link to="work-section" smooth={true} duration={200} className={styles.navLink}>
              <ListItemText style={theme.typography.h6}>Experience</ListItemText>
            </Link>
          </ListItem>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ListItem>
            <Link to="skills-section" smooth={true} duration={200} className={styles.navLink}>
              <ListItemText style={theme.typography.h6}>Skills</ListItemText>
            </Link>
          </ListItem>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ListItem>
            <Link to="portfolio" smooth={true} duration={200} className={styles.navLink}>
              <ListItemText style={theme.typography.h6}>Portfolio</ListItemText>
            </Link>
          </ListItem>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ListItem>
            <Link to="contact" smooth={true} duration={200} className={styles.navLink}>
              <ListItemText style={theme.typography.h6}>Contact</ListItemText>
            </Link>
          </ListItem>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ListItem>
            <IconButton className={styles.navIcons}>
              <GitHubIcon />
            </IconButton>
          </ListItem>
        </motion.div>
      </List>
    </motion.nav>
  );
};

export default NavBar;
