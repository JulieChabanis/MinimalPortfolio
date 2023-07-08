import React, { forwardRef } from 'react';
import PaddingResizeSection from '../../hooks/PaddingResizeSection';
import { Box, useTheme, Grid, Typography } from '@mui/material';
import styles from './Resume.module.css';
import ResumeData from './ResumeData';
import CardResume from './CardResume.jsx/CardResume';

const Resume = forwardRef(() => {
  const theme = useTheme();

  return (
    <Box id="resume-section">
      <Box sx={{ padding: PaddingResizeSection() }}>

        <Box sx={{ fontSize: theme.typography.h8, marginBottom: '3rem' }}>
          <Box className={styles.titleSection}>{'Resume'}</Box>
        </Box>

        <Grid container spacing={4} className={styles.resumeContainer}>

          <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
          <Box className={styles.sectionEducation}> 
              <Typography className={styles.sectionEducationText} variant="h21">{"Education"}</Typography>
              </Box>
          </Grid>
          
          <Grid item xs={12} sm={12} md={12} lg={4} xl={3}>
            <Box 
              className={styles.resumeTimeline}
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#cde7e6' : '#e1d1ff'
              }}
            >
              {ResumeData.map((element, id) => {
                if (element.category === 'education') {
                  return (
                    <CardResume
                      key={id}
                      icon={element.icon}
                      title={element.title}
                      year={element.year}
                      society={element.society}
                      desc={element.desc}
                    />
                  );
                }
                return null; // Added a return statement for non-matching elements
              })}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={8}>
          <Typography variant="h1">{"Work Timeline"}</Typography>
            <Box 
              className={styles.resumeTimeline}
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#0A0A0A' : '#FFFAF3'
              }}
            >
              {ResumeData.map((element, index) => {
                if (element.category === 'experience') {
                  return (
                    <CardResume
                      key={index}
                      icon={element.icon}
                      title={element.title}
                      year={element.year}
                      society={element.society}
                      desc={element.desc}
                    />
                  );
                }
                return null; // Added a return statement for non-matching elements
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
});

export default Resume;
