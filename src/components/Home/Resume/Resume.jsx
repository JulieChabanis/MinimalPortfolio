import React, { forwardRef } from 'react';
import PaddingResizeSection from '../../hooks/PaddingResizeSection';
import { Box, useTheme, Grid, Typography } from '@mui/material';
import styles from './Resume.module.css';
import ResumeData from './ResumeData';
import CardResume from './CardResume.jsx/CardResume';
import SkillsSection from './Skills/SkillsSection';

const Resume = forwardRef(() => {
  const theme = useTheme();

  return (
    <Box id="resume-section">
      <Box sx={{ padding: PaddingResizeSection() }}>

        <Box sx={{ fontSize: theme.typography.h8, marginBottom: '3rem' }}>
          <Box className={styles.titleSection}>{'Resume'}</Box>
        </Box>

        {/*EDUCATION & WORK TIMELINE RESUME*/}
        <Box>
          <Grid container spacing={6}>

            {/* EDUCATION SECTION */}
            <Grid item xs={12} sm={12} md={5} lg={4} xl={3} marginTop={-3}>
            <Typography className={styles.sectionEducationText} variant="h21">{"Education"}</Typography>
              <Box className={styles.educationSection}>
                <Box 
                  className={styles.resumeTimeline}
                >
                  {ResumeData.map((element, id) => {
                    if (element.category === 'education') {
                      return (
                        <CardResume
                          key={id}
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
              </Box>
            </Grid>

            {/* WORK TIMELINE SECTION */}
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6.5}>
              <Box className={styles.WorkSection}>
                <Typography className={styles.sectionWorkText} variant="h21">{"Work Timeline"}</Typography>
                  <Box 
                    className={styles.resumeTimeline}
                    sx={{
                      backgroundColor: theme.palette.mode === 'dark' ? '#d8e5e2' : '#eee3ff',
                    }}
                  >
                    {ResumeData.map((element, index) => {
                      if (element.category === 'experience') {
                        return (
                          <CardResume
                            key={index}
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
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/*SKILLS SECTION RESUME*/}
        <SkillsSection />

      </Box>
    </Box>
  );
});

export default Resume;
