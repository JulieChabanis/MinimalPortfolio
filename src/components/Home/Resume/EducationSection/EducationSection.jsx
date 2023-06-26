import React, { useState } from 'react';
import { Box, Divider, Typography, List, ListItem, Grid, IconButton, Collapse } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import styles from './EducationSection.module.css'

const EducationSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box>

        {/* Education 0 */}
          <Grid 
            container 
            spacing={{ xs: 0, sm: 2, md: 2, lg: 2 }} 
            alignItems="center"
          >
              <Grid item xs={12} sm={1} md={1} lg={1} marginLeft={{ xs: -1.5, sm: 0, md: 0, lg: 0}} marginBottom={{ xs: -1 }}>
                <IconButton onClick={() => handleToggle(0)}>
                  {expanded === 0 ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
                <Typography variant="h10"> Bachelor Digital Solutions Developer</Typography>
              </Grid>
              <Grid item xs={10} sm={5} md={4} lg={5} paddingBottom={2}>
                <Typography marginLeft={{ xs: 4, sm: 0, md: 0, lg: 0}} variant="h4">EJCAM, Aix-en-Provence, FR</Typography>
              </Grid>
              <Grid item xs={2} sm={1} md={1} lg={1} paddingBottom={2}>
                <Typography marginLeft={{ xs: 2, sm: 0, md: 0, lg: 0}} variant="h10">2018</Typography>
              </Grid>
          </Grid>

        <Collapse in={expanded === 0} timeout="auto" unmountOnExit>
              <Typography variant="h6" className={styles.collapsedText}>
                 {"Design Thinking • JS • JAVA • API • Databases"}
              </Typography>
        </Collapse>

        <Divider spacing={2}/>

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
            <Grid item xs={12} sm={5} md={5} lg={5}>
              <Typography variant="h10">Master Communication & Marketing</Typography>
            </Grid>
            <Grid item xs={11} sm={5} md={4} lg={5}>
              <Typography  marginLeft={{ xs: 5, sm: 0, md: 0, lg: 0}} variant="h4">EJCAM, Aix-en-Provence, FR</Typography>
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
          <Grid container spacing={{ xs: 0, sm: 2, md: 1, lg: 2 }} alignItems="center">
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <IconButton onClick={() => handleToggle(2)}>
                {expanded === 2 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
            <Grid item xs={11} sm={5} md={5} lg={5}>
              <Typography variant="h10">Licence Communication & Media</Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={4} lg={5}>
              <Typography  marginLeft={{ xs: 4, sm: 0, md: 0, lg: 0}} variant="h4">EJCAM, Aix-en-Provence, FR</Typography>
              <Typography variant="h10"> {"2023"}</Typography>
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
    </Box>
  );
}

export default EducationSection;
