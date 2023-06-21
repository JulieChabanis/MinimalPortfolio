import styles from "./Navbar.module.css";
import { Box, List, ListItem, ListItemText, useTheme, IconButton, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import React, { useState } from "react";

import SwipeableDrawerMenu from "./SwipeableDrawerMenu";

// import icones
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <Box
      zIndex={1}
      className={styles.navBar}
      sx={{
        backgroundColor: "transparent"
      }}
    >
      <AppBar
        sx={{
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
          boxShadow: "0px 0px 0px 0px",
        }}>
        <Toolbar>
          <Box sx={{ display: { xs: "none", sm: "none", md:"block" } }}>
            <Box className={styles.logo}>
              <Link to="heropage-section" smooth={true} duration={200} className={styles.navLink}>
                JC
              </Link>
            </Box>
          </Box>
          <Box 
            position="fixed" 
            top={25} 
            left={25}
            sx={{ 
              display: { xs: "block", sm: "block", md:"none" },
            }}>
            <IconButton 
              onClick={handleMenuOpen} 
              color="inherit" 
              sx={{ 
                fontSize: 25,
              }}>
              <MenuIcon />
            </IconButton>
            <SwipeableDrawerMenu menuOpen={menuOpen} handleMenuClose={handleMenuClose} />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <List className={styles.navList}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ListItem>
                  <Link to="about-section" smooth={true} duration={200} className={styles.navLink}>
                    <ListItemText sx={{ fontSize: theme.typography.h7}}>About</ListItemText>
                  </Link>
                </ListItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ListItem>
                  <Link to="resume-section" smooth={true} duration={200} className={styles.navLink}>
                    <ListItemText sx={{ fontSize: theme.typography.h7}}>Resume</ListItemText>
                  </Link>
                </ListItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ListItem>
                  <Link to="portfolio" smooth={true} duration={200} className={styles.navLink}>
                    <ListItemText sx={{ fontSize: theme.typography.h7}}>Portfolio</ListItemText>
                  </Link>
                </ListItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ListItem>
                  <Link to="contact" smooth={true} duration={200} className={styles.navLink}>
                    <ListItemText sx={{ fontSize: theme.typography.h7}}>Contact</ListItemText>
                  </Link>
                </ListItem>
              </motion.div>
          
              {/*icons Links*/}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ListItem>
                <a href="https://github.com/JulieChabanis" target="_blank" rel="noopener noreferrer">
                  <IconButton className={styles.navIcons}>
                    <GitHubIcon />
                  </IconButton>
                </a>
              </ListItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ListItem>
                  <a href="https://www.linkedin.com/in/julie-chabanis-80695690/" target="_blank" rel="noopener noreferrer">
                    <IconButton className={styles.navIcons}>
                     <LinkedInIcon />
                    </IconButton>
                  </a>
                </ListItem>
              </motion.div>

            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

