import { motion, useAnimation } from "framer-motion";
import React from 'react';
import { useTheme } from "@emotion/react";
import styles from './Skills.module.css';
import { Box, Grid } from "@mui/material";

import { ParallaxSectionSubtitle } from "../../Effects/ParallaxSectionTitle/ParallaxSectionTitle";

import PaddingResizeSection from "../../hooks/PaddingResizeSection";
import SmoothScroll from "../../hooks/SmoothScroll";

const Skills = () => {
  const theme = useTheme();
  const controls = useAnimation();

  return (
    <Box id="skills-section" sx={{ padding: PaddingResizeSection()}}>
      <Box className={styles.mainSkillsSection}>
        <SmoothScroll controls={controls} />
        <Grid container spacing={12}>
          <Grid item xs={12}>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
            </motion.div>
            <Box sx={{ ...theme.typography.h8 }}>
                 <ParallaxSectionSubtitle baseVelocity={-2}> • Skills</ParallaxSectionSubtitle>
              </Box>
          </Grid>

        </Grid>
      </Box>
    </Box>
  )
}

export default Skills