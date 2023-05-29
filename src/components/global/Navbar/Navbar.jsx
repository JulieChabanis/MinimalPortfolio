import styles from './Navbar.module.css'; 
import { Box, List, ListItem, ListItemText, useTheme, IconButton } from '@mui/material';
import { tokens } from '../../Theme/theme';
// import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';


const NavBar = () => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode); 

  return (
    <Box>
      <Box className={styles.logo}>
      JC
      </Box>
      <nav className={styles.navBar}>
        <Box className={styles.nav}> 
          <List className={styles.navList}>
          <ListItem>
              <ListItemText style={theme.typography.h6}>Skills</ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText style={theme.typography.h6}>Projects</ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText style={theme.typography.h6}>Portfolio</ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText style={theme.typography.h6}>Contact</ListItemText>
            </ListItem>
            <ListItem>
            <IconButton className={styles.navIcons}>
              <GitHubIcon/>
            </IconButton>
            </ListItem>
          </List>
        </Box>
      </nav>
    </Box>

  )
}

export default NavBar; 