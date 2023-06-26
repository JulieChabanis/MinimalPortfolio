import React, { useState } from 'react';
import { Box, Divider, Typography, List, ListItem, Grid, IconButton, Collapse } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import styles from './Education.module.css'

const EducationSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box>
      <List>

        {/* Education 0 */}
        <ListItem>
          <Grid 
            container 
            spacing={{ xs: 0, sm: 2, md: 2, lg: 2 }} 
            alignItems="center"
          >
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <IconButton onClick={() => handleToggle(0)}>
                {expanded === 0 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
            <Grid item xs={11} sm={5} md={5} lg={5}>
              <Typography variant="h10"> Bachelor Digital Solutions Developer</Typography>
            </Grid>
            <Grid item xs={11} sm={5} md={4} lg={4}>
              <Typography marginLeft={{ xs: 4, sm: 0, md: 0, lg: 0}} variant="h4">HETIC, Montpellier, FR</Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <Typography variant="h10"> 
                {"2023"}
              </Typography>
            </Grid>
          </Grid>
        </ListItem>

        <Collapse in={expanded === 0} timeout="auto" unmountOnExit>
              <Typography variant="h6" className={styles.collapsedText}>
                 {"Design Thinking • JS • JAVA • API • Databases"}
              </Typography>
        </Collapse>

        <Divider />

        {/* Education 1 */}
        <ListItem>
          <Grid 
            container 
            spacing={{ xs: 0, sm: 2, md: 2, lg: 2 }}  
            alignItems="center"
          >
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <IconButton onClick={() => handleToggle(1)}>
                {expanded === 1 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
            <Grid item xs={11} sm={5} md={5} lg={5}>
              <Typography variant="h10">Master Communication & Marketing</Typography>
            </Grid>
            <Grid item xs={11} sm={5} md={4} lg={4}>
              <Typography  marginLeft={{ xs: 4, sm: 0, md: 0, lg: 0}} variant="h4">EJCAM, Aix-en-Provence, FR</Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <Typography variant="h10">2018</Typography>
            </Grid>
          </Grid>
        </ListItem>

        <Collapse in={expanded === 1} timeout="auto" unmountOnExit>
          <Typography variant="h6" className={styles.collapsedText}>
          {"Development strategy • Branding • Market research"}
          </Typography>
        </Collapse>

        <Divider />

        {/* Education 2 */}
        <ListItem>
          <Grid container spacing={{ xs: 0, sm: 2, md: 1, lg: 0 }} alignItems="center">
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <IconButton onClick={() => handleToggle(2)}>
                {expanded === 2 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
            <Grid item xs={11} sm={5} md={5} lg={5}>
              <Typography variant="h10">Licence Communication & Media</Typography>
            </Grid>
            <Grid item xs={11} sm={5} md={4} lg={4}>
              <Typography  marginLeft={{ xs: 4, sm: 0, md: 0, lg: 0}} variant="h4">EJCAM, Aix-en-Provence, FR</Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <Typography variant="h10">2016</Typography>
            </Grid>
          </Grid>
        </ListItem>

        <Collapse in={expanded === 2} timeout="auto" unmountOnExit>
          <Typography variant="h6" className={styles.collapsedText}>
            {"Media studies • Influence strategy • New Media"}
          </Typography>
        </Collapse>
        
      </List>
    </Box>
  );
}

export default EducationSection;
