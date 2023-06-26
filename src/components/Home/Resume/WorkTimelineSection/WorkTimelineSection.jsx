import React, { useState } from 'react';
import { Box, Divider, Typography, Grid, IconButton, Collapse } from '@mui/material';
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

        {/* WorkTimeline 0 */}
          <Grid 
            container 
            spacing={{ xs: 0, sm: 2, md: 2, lg: 2 }} 
            alignItems="center"
        
          >
            <Grid 
              item xs={1.6} sm={1} md={1} lg={1}
              marginLeft={{ xs: -1.5, sm: 0, md: 0, lg: 0}} 
              marginBottom={{ xs: -1 }}
            >
              <IconButton onClick={() => handleToggle(0)}>
                {expanded === 0 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
           <Grid item xs={2.4} sm={5} md={5} lg={5}>
            <Box className={styles.logoWorkExperience}>
              <img src={ProfilUser} alt="Julie Chabanis" />
            </Box>
            </Grid> 
            <Grid 
              item xs={8} sm={5} md={5} lg={5}
              marginLeft={{ xs: -1.5, sm: 0, md: 0, lg: 0}}
              marginBottom={{ xs: -1 }}
            >
              <Typography variant="h10"> Co-founder • Graphic Design </Typography>
            </Grid>
            <Grid 
              item xs={8} sm={5} md={4} lg={4}
              paddingBottom={2}
            >
              <Typography 
                marginLeft={{ xs: 10, sm: 0, md: 0, lg: 0}} 
                variant="h4"
              >
                  La Kollective, FR
              </Typography>
            </Grid>
            <Grid 
              item xs={4} sm={1} md={1} lg={2}
              paddingBottom={2}
            >
              <Typography 
                marginLeft={{ xs: 3.4, sm: 0, md: 0, lg: 0}}  
                variant="h10"
              > 
                {"Since 2017"}
              </Typography>
            </Grid>
          </Grid>

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
        <Grid 
            container 
            spacing={{ xs: 0, sm: 2, md: 2, lg: 2 }} 
            alignItems="center"
            marginTop={3}
        
          >
            <Grid 
              item xs={1.6} sm={1} md={1} lg={1}
              marginLeft={{ xs: -1.5, sm: 0, md: 0, lg: 0}} 
              marginBottom={{ xs: -1 }}
            >
              <IconButton onClick={() => handleToggle(1)}>
                {expanded === 1 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
           <Grid item xs={2.4} sm={5} md={5} lg={5}>
            <Box className={styles.logoWorkExperience}>
              <img src={ProfilUser} alt="Julie Chabanis" />
            </Box>
            </Grid> 
            <Grid 
              item xs={8} sm={5} md={5} lg={5}
              marginLeft={{ xs: -1.5, sm: 0, md: 0, lg: 0}}
              marginBottom={{ xs: -1 }}
            >
              <Typography variant="h10"> Co-founder • Graphic Design </Typography>
            </Grid>
            <Grid 
              item xs={8} sm={5} md={4} lg={4}
              paddingBottom={2}
            >
              <Typography 
                marginLeft={{ xs: 10, sm: 0, md: 0, lg: 0}} 
                variant="h4"
              >
                  La Kollective, FR
              </Typography>
            </Grid>
            <Grid 
              item xs={4} sm={1} md={1} lg={2}
              paddingBottom={2}
            >
              <Typography 
                marginLeft={{ xs: 3.4, sm: 0, md: 0, lg: 0}}  
                variant="h10"
              > 
                {"Since 2017"}
              </Typography>
            </Grid>
          </Grid>

        <Collapse in={expanded === 1} timeout="auto" unmountOnExit>
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

        {/* WorkTimeline 2 */}
        <Grid 
            container 
            spacing={{ xs: 0, sm: 2, md: 2, lg: 2 }} 
            alignItems="center"
            marginTop={3}
        
          >
            <Grid 
              item xs={1.6} sm={1} md={1} lg={1}
              marginLeft={{ xs: -1.5, sm: 0, md: 0, lg: 0}} 
              marginBottom={{ xs: -1 }}
            >
              <IconButton onClick={() => handleToggle(2)}>
                {expanded === 2 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
           <Grid item xs={2.4} sm={5} md={5} lg={5}>
            <Box className={styles.logoWorkExperience}>
              <img src={ProfilUser} alt="Julie Chabanis" />
            </Box>
            </Grid> 
            <Grid 
              item xs={8} sm={5} md={5} lg={5}
              marginLeft={{ xs: -1.5, sm: 0, md: 0, lg: 0}}
              marginBottom={{ xs: -1 }}
            >
              <Typography variant="h10"> Co-founder • Graphic Design </Typography>
            </Grid>
            <Grid 
              item xs={8} sm={5} md={4} lg={4}
              paddingBottom={2}
            >
              <Typography 
                marginLeft={{ xs: 10, sm: 0, md: 0, lg: 0}} 
                variant="h4"
              >
                  La Kollective, FR
              </Typography>
            </Grid>
            <Grid 
              item xs={4} sm={1} md={1} lg={2}
              paddingBottom={2}
            >
              <Typography 
                marginLeft={{ xs: 3.4, sm: 0, md: 0, lg: 0}}  
                variant="h10"
              > 
                {"Since 2017"}
              </Typography>
            </Grid>
          </Grid>

        <Collapse in={expanded === 2} timeout="auto" unmountOnExit>
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
    </Box>
  );
}

export default WorkTimelineSection;
