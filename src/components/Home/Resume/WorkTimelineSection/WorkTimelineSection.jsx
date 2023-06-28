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
            spacing={{ xs: 0, sm: 0, md: 1, lg: 0 }} 
            alignItems="center"
        
          >
            <Grid 
              item xs={12} sm={12} md={5} lg={12} 
              marginLeft={{ xs: -1.5, sm: -1.5, md: -1.5, lg: -1.5}} 
              marginBottom={{ xs: -1, sm: -1, md: 0, lg: -0.3 }}
              marginTop={1.5}
            >
              <IconButton onClick={() => handleToggle(0)}>
                {expanded === 0 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
              <Typography variant="h10"> 
                {"Co-founder & Graphic Designer (DPT)"}
              </Typography>
            </Grid>
            <Grid 
              item xs={1.7} sm={1.7} md={1} lg={1.2} 
              paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              paddingTop={0.5}
            >
              <Box 
                className={styles.logoWorkExperience}
                marginLeft={{ xs: 3.5, sm: 3.5, md: 0, lg: 3.5}} 
              >
                <img src={ProfilUser} alt="Julie Chabanis" />
              </Box>
            </Grid> 
            <Grid 
                item xs={7} sm={7} md={4} lg={7.8} 
                paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              >
                <Typography 
                  marginLeft={{ xs: 3.5, sm: 2, md: 0, lg: 4.8}} 
                  variant="h4"
                > 
                {"La Kollective, FR"}
                </Typography>
              </Grid>
              <Grid 
                item lg={3} 
                paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              >
                <Typography 
                  marginLeft={{ xs: 2, sm: 4, md: 6, lg: 0}} 
                  variant="h10"
                >
                  Since 2017
                </Typography>
              </Grid>
          </Grid>

        <Collapse in={expanded === 0} timeout="auto" unmountOnExit>
             <Box 
              marginTop={{xs: 0.6, sm: 0.6, md: 0.6, lg: 1.5}}
              paddingLeft={{ xs: 3.5, sm: 3.5, md: 3.5, lg: 3.5}}
              paddingBottom={{ xs: 2.3, sm: 2.7, md: 3.5, lg: 2}}

              >
                <Typography variant="h6">
                  {"❋ Electronic Music Collective"}
                </Typography>
                <Typography variant="h6">
                  {"❋ House music, disco and more"}
                </Typography>
                <Typography variant="h6">
                  {"❋ Artists Booking."}
                </Typography>
                <Typography variant="h6">
                  {"❋ Illustrations (DPT) for events"}
                </Typography>
                <Box marginTop={2}>
                <InstagramIcon/>
                <FacebookIcon className={styles.icones} />
                </Box>
              </Box> 
        </Collapse>

        <Divider />

        {/* WorkTimeline 1 */}
        <Grid 
            container 
            spacing={{ xs: 0, sm: 0, md: 1, lg: 0 }} 
            alignItems="center"
        
          >
            <Grid 
              item xs={12} sm={12} md={5} lg={12} 
              marginLeft={{ xs: -1.5, sm: -1.5, md: -1.5, lg: -1.5}} 
              marginBottom={{ xs: -1, sm: -1, md: 0, lg: -0.3 }}
              marginTop={1.5}
            >
              <IconButton onClick={() => handleToggle(1)}>
                {expanded === 1 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
              <Typography variant="h10"> 
                {"React JS Developper - Ternoa"}
              </Typography>
            </Grid>
            <Grid 
              item xs={1.7} sm={1.7} md={1} lg={1.2} 
              paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              paddingTop={0.5}
            >
              <Box 
                className={styles.logoWorkExperience}
                marginLeft={{ xs: 3.5, sm: 3.5, md: 0, lg: 3.5}} 
              >
                <img src={ProfilUser} alt="Julie Chabanis" />
              </Box>
            </Grid> 
            <Grid 
                item xs={7} sm={7} md={4} lg={7.8} 
                paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              >
                <Typography 
                  marginLeft={{ xs: 3.5, sm: 2, md: 0, lg: 4.8}} 
                  variant="h4"
                > 
                {"Capsule Corp.Labs"}
                </Typography>
              </Grid>
              <Grid 
                item lg={3} 
                paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              >
                <Typography 
                  marginLeft={{ xs: 2, sm: 4, md: 6, lg: 0}} 
                  variant="h10"
                >
                  0/N 2022
                </Typography>
              </Grid>
          </Grid>

        <Collapse in={expanded === 1} timeout="auto" unmountOnExit>
             <Box 
              marginTop={{xs: 0.6, sm: 0.6, md: 0.6, lg: 1.5}}
              paddingLeft={{ xs: 3.5, sm: 3.5, md: 3.5, lg: 3.5}}
              paddingBottom={{ xs: 2.3, sm: 2.7, md: 3.5, lg: 2}}

              >
                <Typography variant="h6">
                  {"❋ 2 months intership"}
                </Typography>
                <Typography variant="h6">
                  {"❋ Full remote & flex time"}
                </Typography>
                <Typography variant="h6">
                  {"❋ Addition of new front-end features"}
                </Typography>
                <Typography variant="h6">
                  {"❋ Testing API Axios routh path"}
                </Typography>
                <Typography variant="h6">
                  {"❋ Implementation of a new solution : documentation (using Docusaurus)"}
                </Typography>
                <Typography variant="h6">
                  {"❋ Asynchronous project management AGILE - JIRA"}
                </Typography>
                <Box marginTop={2}>
                <InstagramIcon/>
                <FacebookIcon className={styles.icones} />
                </Box>
              </Box> 
        </Collapse>
        <Divider />

        {/* WorkTimeline 2 */}
        <Grid 
            container 
            spacing={{ xs: 0, sm: 0, md: 1, lg: 0 }} 
            alignItems="center"
        
          >
            <Grid 
              item xs={12} sm={12} md={5} lg={12} 
              marginLeft={{ xs: -1.5, sm: -1.5, md: -1.5, lg: -1.5}} 
              marginBottom={{ xs: -1, sm: -1, md: 0, lg: -0.3 }}
              marginTop={1.5}
            >
              <IconButton onClick={() => handleToggle(2)}>
                {expanded === 2 ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
              <Typography variant="h10"> 
                {"Communication Officer & Graphic Design"}
              </Typography>
            </Grid>
            <Grid 
              item xs={1.7} sm={1.7} md={1} lg={1.2} 
              paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              paddingTop={0.5}
            >
              <Box 
                className={styles.logoWorkExperience}
                marginLeft={{ xs: 3.5, sm: 3.5, md: 0, lg: 3.5}} 
              >
                <img src={ProfilUser} alt="Julie Chabanis" />
              </Box>
            </Grid> 
            <Grid 
                item xs={7} sm={7} md={4} lg={7.8} 
                paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              >
                <Typography 
                  marginLeft={{ xs: 3.5, sm: 2, md: 0, lg: 4.8}} 
                  variant="h4"
                > 
                {"Tourism Office, FR"}
                </Typography>
              </Grid>
              <Grid 
                item lg={3} 
                paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              >
                <Typography 
                  marginLeft={{ xs: 2, sm: 4, md: 6, lg: 0}} 
                  variant="h10"
                >
                  2019-2021
                </Typography>
              </Grid>
          </Grid>

        <Collapse in={expanded === 2} timeout="auto" unmountOnExit>
             <Box 
              marginTop={{xs: 0.6, sm: 0.6, md: 0.6, lg: 1.5}}
              paddingLeft={{ xs: 3.5, sm: 3.5, md: 3.5, lg: 3.5}}
              paddingBottom={{ xs: 2.3, sm: 2.7, md: 3.5, lg: 2}}

              >
                <Typography variant="h6">
                  {"❋ Permanent Contract (CDI in French)"}
                </Typography>
                <Typography variant="h6">
                  {"❋ Position held for two years and seven months"}
                </Typography>
                <Typography variant="h6">
                  {"❋ Desktop Publishing creation for promotion"}
                </Typography>
                <Typography variant="h6">
                  {"❋ Logo redesign and creation"}
                </Typography>
                <Typography variant="h6">
                  {"❋ Magazine print redesign and creation"}
                </Typography>
                <Typography variant="h6">
                  {"❋ Project manager for website redesign"}
                </Typography>
                <Typography variant="h6">
                  {"❋ Communication campaigns"}
                </Typography>
                <Typography variant="h6">
                  {"❋ Marketing Strategy"}
                </Typography>
                <Box marginTop={2}>
                <InstagramIcon/>
                <FacebookIcon className={styles.icones} />
                </Box>
              </Box> 
        </Collapse>
    </Box>
  );
}

export default WorkTimelineSection;
