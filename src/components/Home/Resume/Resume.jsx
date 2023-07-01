import { useAnimation } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import styles from './Resume.module.css';
import { Box, Grid, useTheme } from "@mui/material";

import EducationSection from "./EducationSection/EducationSection";
import WorkTimelineSection from "./WorkTimelineSection/WorkTimelineSection";
import SkillsSection from "./Skills/SkillsSection";

// import { ParallaxSectionSubtitle } from "../../Effects/ParallaxSectionTitle/ParallaxSectionTitle";
import PaddingResizeSection from "../../hooks/PaddingResizeSection";
import SmoothScroll from "../../hooks/SmoothScroll";

const Resume = React.forwardRef(() => {
  const theme = useTheme();
  const controls = useAnimation();
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elementTop = parallaxRef.current.offsetTop;
      const distance = scrollY - elementTop;
      const baseVelocity = 2; //  help : 2=leftToRight, -2=Right to left
      const moveBy = baseVelocity * distance;
      parallaxRef.current.style.transform = `translateX(${moveBy}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box id="resume-section" sx={{ padding: PaddingResizeSection()}}>
      <Box sx={{ fontSize: theme.typography.h8, marginBottom: "2.2rem" }}>
        <Box className={styles.titleSection} ref={parallaxRef}>
         {'• Resume'}
        </Box>
      </Box>
      <Box className={styles.mainSkillsSection}>
        <SmoothScroll controls={controls} />
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
