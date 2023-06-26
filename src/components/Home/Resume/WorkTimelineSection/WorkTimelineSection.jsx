import React, { useState } from 'react';
import { Box, Divider, Typography, List, ListItem, Grid, IconButton, Collapse } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import styles from './WorkTimelineSection.module.css';
import ProfilUser from "../../../../assets/images/profilUser.png";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const WorkTimelineSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box>
      <List>

        {/* WorkTimeline 0 */}
        <ListItem>
          <Grid 
            container 
            spacing={{ xs: 0, sm: 2, md: 2, lg: 2 }} 
            alignItems="center"
        
          >
            <Grid item xs={1.4} sm={1} md={1} lg={1}>
              <IconButton onClick={() => handleToggle(0)}>
                {expanded === 0 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
           <Grid item xs={1.6} sm={5} md={5} lg={5}>
            <Box className={styles.logoWorkExperience}>
              <img src={ProfilUser} alt="Julie Chabanis" />
            </Box>
            </Grid> 
            <Grid item xs={9} sm={5} md={5} lg={5}>
              <Typography variant="h10"> Co-founder • Graphic Design </Typography>
            </Grid>
            <Grid item xs={8} sm={5} md={4} lg={4}>
              <Typography marginLeft={{ xs: 14, sm: 0, md: 0, lg: 0}} variant="h4">La Kollective, FR</Typography>
            </Grid>
            <Grid item xs={4} sm={1} md={1} lg={2}>
              <Typography marginLeft={{ xs: 8, sm: 0, md: 0, lg: 0}}  variant="h10"> 
                {"Since 2017"}
              </Typography>
            </Grid>
          </Grid>
        </ListItem>

        <Collapse in={expanded === 0} timeout="auto" unmountOnExit>
             <Box className={styles.collapsedText} marginTop={2}>
                <Typography variant="h6">
                  {"Electronic Music Collective / Events since 2017"}
                </Typography>
                <Typography variant="h6">
                  {"Electronic Music Collective / Events • Development Strategy"}
                </Typography>
                <Typography variant="h6">
                  {"Electronic Music Collective / Events • Development Strategy"}
                </Typography>
                <Box marginTop={2}>
                <InstagramIcon />
                <FacebookIcon className={styles.icones} />
                </Box>
              </Box> 
        </Collapse>

        <Divider />

        {/* WorkTimeline 1 */}
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
              <Typography variant="h10">React JS Developer •  Internship </Typography>
            </Grid>
            <Grid item xs={7} sm={5} md={4} lg={3}>
              <Typography  marginLeft={{ xs: 4, sm: 0, md: 0, lg: 0}} variant="h4">Ternoa, Capsule Corp. Labs</Typography>
            </Grid>
            <Grid item xs={5} sm={1} md={1} lg={3}>
              <Typography variant="h10" marginLeft={{ xs: 9, sm: 0, md: 0, lg: 0}}>Oct-Nov 2022</Typography>
            </Grid>
          </Grid>
        </ListItem>

        <Collapse in={expanded === 1} timeout="auto" unmountOnExit>
          <Typography variant="h6" className={styles.collapsedText}>
          {"Electronic Music Collective / Events • Development Strategy"}
          </Typography>
        </Collapse>

        <Divider />

        {/* WorkTimeline 2 */}
        <ListItem>
          <Grid container spacing={{ xs: 0, sm: 2, md: 1, lg: 2 }} alignItems="center">
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <IconButton onClick={() => handleToggle(2)}>
                {expanded === 2 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
            <Grid item xs={11} sm={5} md={5} lg={5}>
              <Typography variant="h10">Communication Strategy • Graphic Design </Typography>
            </Grid>
            <Grid item xs={6} sm={5} md={4} lg={3}>
              <Typography  marginLeft={{ xs: 4, sm: 0, md: 0, lg: 0}} variant="h4">Tourism Office, FR</Typography>
            </Grid>
            <Grid item xs={6} sm={1} md={1} lg={3}>
              <Typography marginLeft={{ xs: 17, sm: 0, md: 0, lg: 0}} variant="h10">2019-2021</Typography>
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

export default WorkTimelineSection;
