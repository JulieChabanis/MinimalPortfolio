import React, { forwardRef} from 'react';
import styles from './Resume.module.css';
import { Box, Grid, useTheme } from "@mui/material";

import EducationSection from "./EducationSection/EducationSection";
import WorkTimelineSection from "./WorkTimelineSection/WorkTimelineSection";
import SkillsSection from "./Skills/SkillsSection";

import PaddingResizeSection from "../../hooks/PaddingResizeSection";

const Resume = forwardRef(() => {
  const theme = useTheme();

  return (
    <Box id="resume-section" sx={{ padding: PaddingResizeSection()}}>
      <Box sx={{ fontSize: theme.typography.h8, marginBottom: "2.2rem" }}>
        <Box className={styles.titleSection}>
         {'Resume'}
        </Box>
      </Box>
      <Box className={styles.mainSkillsSection}>
        <Grid container spacing={12}>
          <Grid item xs={12} sm={12} md={12} lg={5}>
              <Box sx={{ fontSize: theme.typography.h2, marginBottom: "1rem"}}>
                Education
              </Box>
              <Box>
               <EducationSection />
              </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <Box sx={{ fontSize: theme.typography.h2, marginBottom: "1rem"}}>
                Work Timeline
            </Box>
            <Box>
            <WorkTimelineSection />
            </Box>
          </Grid>  
          <Grid item xs={12} sm={12} md={12} lg={10}>
            <Box sx={{ fontSize: theme.typography.h2, marginBottom: "1rem"}}>
              Skills
            </Box>
            <Box>
            <SkillsSection />
              </Box>
            </Grid>
        </Grid>
      </Box>
    </Box>
  );
});

export default Resume;
