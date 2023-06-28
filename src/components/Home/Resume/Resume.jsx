import { useAnimation } from "framer-motion";
import React  from 'react';
import styles from './Resume.module.css';
import { Box, Grid, useTheme } from "@mui/material";

import EducationSection from "./EducationSection/EducationSection";
import WorkTimelineSection from "./WorkTimelineSection/WorkTimelineSection";
import SkillsSection from "./Skills/SkillsSection";

import { ParallaxSectionSubtitle } from "../../Effects/ParallaxSectionTitle/ParallaxSectionTitle";
import PaddingResizeSection from "../../hooks/PaddingResizeSection";
import SmoothScroll from "../../hooks/SmoothScroll";

const Resume = React.forwardRef(() => {
  const theme = useTheme();
  const controls = useAnimation();

  return (
    <Box id="resume-section" sx={{ padding: PaddingResizeSection()}}>
      <Box className={styles.mainSkillsSection}>
        <SmoothScroll controls={controls} />
        <Box sx={{ fontSize: theme.typography.h8, marginBottom: "2.2rem" }}>
            <ParallaxSectionSubtitle baseVelocity={-2}>• Resume</ParallaxSectionSubtitle>
          </Box>
        <Grid container spacing={12}>
          <Grid item xs={12} sm={12} md={12} lg={5}>
              <Box sx={{ fontSize: theme.typography.h2, marginBottom: "1.4rem"}}>
                Education
              </Box>
              <Box>
               <EducationSection />
              </Box>
              <Box sx={{ fontSize: theme.typography.h2, marginBottom: "1.4rem", marginTop: "5rem"}}>
                Skills
              </Box>
              <Box>
                <SkillsSection />
              </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <Box sx={{ fontSize: theme.typography.h2, marginBottom: "1.4rem"}}>
                Work Timeline
            </Box>
            <Box>
            <WorkTimelineSection />
            </Box>
          </Grid>  

        </Grid>
      </Box>
    </Box>
  )
}); 

export default Resume