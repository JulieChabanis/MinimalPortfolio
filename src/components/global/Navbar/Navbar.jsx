import styles from "./Navbar.module.css";
import { Box, List, ListItem, ListItemText, useTheme, IconButton, AppBar, Toolbar, Menu, MenuItem } from "@mui/material";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import React, { useState } from "react";
import ThemeToggleButton from "../ThemeToggle/ThemeToggle";

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
    <motion.nav
      className={styles.navBar}
      style={{
        backgroundColor: "transparent"
      }}
    >
      <AppBar
        position="static"
        style={{
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
            top={24} 
            left={25}
            alignItems="flex-start"
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
            <Menu
              anchorEl={null}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              open={menuOpen}
              onClose={handleMenuClose}
            >
              <ThemeToggleButton />
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
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <List className={styles.navList}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ListItem>
                  <Link to="work-section" smooth={true} duration={200} className={styles.navLink}>
                    <ListItemText style={theme.typography.h6}>Experience</ListItemText>
                  </Link>
                </ListItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ListItem>
                  <Link to="skills-section" smooth={true} duration={200} className={styles.navLink}>
                    <ListItemText style={theme.typography.h6}>Skills</ListItemText>
                  </Link>
                </ListItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ListItem>
                  <Link to="portfolio" smooth={true} duration={200} className={styles.navLink}>
                    <ListItemText style={theme.typography.h6}>Portfolio</ListItemText>
                  </Link>
                </ListItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ListItem>
                  <Link to="contact" smooth={true} duration={200} className={styles.navLink}>
                    <ListItemText style={theme.typography.h6}>Contact</ListItemText>
                  </Link>
                </ListItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ListItem>
                  <IconButton className={styles.navIcons}>
                    <GitHubIcon />
                  </IconButton>
                </ListItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ListItem>
                  <IconButton className={styles.navIcons}>
                    <LinkedInIcon />
                  </IconButton>
                </ListItem>
              </motion.div>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.nav>
  );
};

export default NavBar;
