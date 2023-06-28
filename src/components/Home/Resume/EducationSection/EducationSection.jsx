import React, { useState } from 'react';
import { Box, Divider, Typography, Grid, IconButton, Collapse } from '@mui/material';
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
            spacing={{ xs: 0, sm: 0, md: 1, lg: 0 }} 
            alignItems="center"
          >
              <Grid 
                item xs={12} sm={12} md={7} lg={12} 
                marginLeft={{ xs: -1.5, sm: -1.5, md: -1.5, lg: -1.5}} 
                marginBottom={{ xs: -1, sm: -1, md: 0, lg: -0.3 }}
                marginTop={1.5}
              >
                <IconButton onClick={() => handleToggle(0)}>
                  {expanded === 0 ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
                <Typography variant="h10"> 
                  {"Bachelor Digital Solutions Developer"}
                </Typography>
              </Grid>
              <Grid 
                item xs={10} sm={10} md={4} lg={10} 
                paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              >
                <Typography 
                  marginLeft={{ xs: 3.5, sm: 3.5, md: 0, lg: 3.5}} 
                  variant="h4"
                > 
                {"HETIC, Montpellier, FR"}
                </Typography>
              </Grid>
              <Grid 
                item xs={2} sm={2} md={1} lg={2} 
                paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              >
                <Typography 
                  marginLeft={{ xs: 2, sm: 2, md: 3, lg: 3}} 
                  variant="h10"
                >
                  2023
                </Typography>
              </Grid>
          </Grid>

        <Collapse in={expanded === 0} timeout="auto" unmountOnExit>
              <Typography 
                variant="h6" 
                paddingLeft={{xs: 3.5, sm: 3.5, md: 3.5, lg: 3.5}}
                paddingBottom={{ xs: 2.5, sm: 2, md: 2, lg: 2.5}}
                >
                 {"Design Thinking • JS • JAVA • API • Databases"}
              </Typography>
        </Collapse>

        <Divider spacing={2}/>

        {/* Education 1 */}
        <Grid 
            container 
            spacing={{ xs: 0, sm: 0, md: 1, lg: 0 }} 
            alignItems="center"
          >
              <Grid 
                item xs={12} sm={12} md={7} lg={12} 
                marginLeft={{ xs: -1.5, sm: -1.5, md: -1.5, lg: -1.5}} 
                marginBottom={{ xs: -1, sm: -1, md: 0, lg: -0.3 }}
                marginTop={1.5}
              >
                <IconButton onClick={() => handleToggle(1)}>
                  {expanded === 1 ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
                <Typography variant="h10"> 
                  {"Master Communication & Marketing"}
                </Typography>
              </Grid>
              <Grid 
                item xs={10} sm={10} md={4} lg={10} 
                paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              >
                <Typography 
                  marginLeft={{ xs: 3.5, sm: 3.5, md: 0, lg: 3.5}} 
                  variant="h4"
                > 
                {"EJCAM, Aix-en-Provence, FR"}
                </Typography>
              </Grid>
              <Grid 
                item xs={2} sm={2} md={1} lg={2} 
                paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              >
                <Typography 
                  marginLeft={{ xs: 2, sm: 2, md: 3, lg: 3}} 
                  variant="h10"
                >
                  2018
                </Typography>
              </Grid>
          </Grid>

        <Collapse in={expanded === 1} timeout="auto" unmountOnExit>
              <Typography 
                variant="h6" 
                paddingLeft={{xs: 3.5, sm: 3.5, md: 3.5, lg: 3.5}}
                paddingBottom={{ xs: 2.5, sm: 2, md: 2, lg: 2.5}}
                >
                 {"Development Strategy • Branding • Market Research"}
              </Typography>
        </Collapse>

        <Divider />

        {/* Education 2 */}
        <Grid 
            container 
            spacing={{ xs: 0, sm: 0, md: 1, lg: 0 }} 
            alignItems="center"
          >
              <Grid 
                item xs={12} sm={12} md={7} lg={12} 
                marginLeft={{ xs: -1.5, sm: -1.5, md: -1.5, lg: -1.5}} 
                marginBottom={{ xs: -1, sm: -1, md: 0, lg: -0.3 }}
                marginTop={1.5}
              >
                <IconButton onClick={() => handleToggle(2)}>
                  {expanded === 2 ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
                <Typography variant="h10"> 
                  {"Licence Media & Strategy"}
                </Typography>
              </Grid>
              <Grid 
                item xs={10} sm={10} md={4} lg={10} 
                paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              >
                <Typography 
                  marginLeft={{ xs: 3.5, sm: 3.5, md: 0, lg: 3.5}} 
                  variant="h4"
                > 
                {"EJCAM, Aix-en-Provence, FR"}
                </Typography>
              </Grid>
              <Grid 
                item xs={2} sm={2} md={1} lg={2} 
                paddingBottom={{ xs: 2, sm: 2, md:0, lg: 2}}
              >
                <Typography 
                  marginLeft={{ xs: 2, sm: 2, md: 3, lg: 3}} 
                  variant="h10"
                >
                  2016
                </Typography>
              </Grid>
          </Grid>

        <Collapse in={expanded === 2} timeout="auto" unmountOnExit>
              <Typography 
                variant="h6" 
                paddingLeft={{xs: 3.5, sm: 3.5, md: 3.5, lg: 3.5}}
                paddingBottom={{ xs: 2.5, sm: 2, md: 2, lg: 2.5}}
                >
                 {"Media Studies • Influence Strategy • New Media"}
              </Typography>
        </Collapse>
    </Box>
  );
}

export default EducationSection;
