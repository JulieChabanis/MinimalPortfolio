import styles from './Navbar.module.css'; 
import { Box, List, ListItem, ListItemText, useTheme, IconButton } from '@mui/material';
import { tokens } from '../../Theme/theme';
// import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';


const NavBar = () => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode); 

  return (
    <nav className={styles.navBar}>
      <Box className={styles.nav}>
        <List className={styles.navList} style={theme.typography.body1}>
          <ListItem>
            <ListItemText primaryTypographyProps={{ variant: "h6" }}>Skills</ListItemText>
          </ListItem>
          <ListItem>
          <ListItemText primaryTypographyProps={{ variant: "h6" }}>Projects</ListItemText>
          </ListItem>
          <ListItem>
          <ListItemText primaryTypographyProps={{ variant: "h6" }}>Portfolio</ListItemText>
          </ListItem>
          <ListItem>
          <ListItemText primaryTypographyProps={{ variant: "h6" }}>Contact</ListItemText>
          </ListItem>
          <ListItem>
          <IconButton className={styles.navIcons}>
            <GitHubIcon/>
          </IconButton>
          </ListItem>
        </List>
      </Box>
    </nav>

  )
}

export default NavBar; 