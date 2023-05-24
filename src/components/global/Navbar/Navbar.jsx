import styles from './Navbar.module.css'; 
import { Box, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { tokens } from '../../UItheme/theme';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); 

  return (
    <nav className={styles.navBar}>
      <Box className={styles.nav}>
      <List className={styles.navList} style={theme.typography.body1}>
        <ListItem>
          <ListItemText primaryTypographyProps={{ variant: "h3" }}>Skills</ListItemText>
        </ListItem>
        <ListItem>
        <ListItemText primaryTypographyProps={{ variant: "h3" }}>Projects</ListItemText>
        </ListItem>
        <ListItem>
        <ListItemText primaryTypographyProps={{ variant: "h3" }}>Portfolio</ListItemText>
        </ListItem>
        <ListItem>
        <ListItemText primaryTypographyProps={{ variant: "h3" }}>Contact</ListItemText>
        </ListItem>

      </List>
      </Box>
    </nav>

  )
}

export default NavBar; 