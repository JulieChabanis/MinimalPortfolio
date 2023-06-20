import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Box } from "@mui/material";
import styles from "./About.module.css";
import { useTheme } from "@emotion/react";

import PaddingResizeSection from "../../hooks/PaddingResizeSection";
import SmoothScroll from "../../hooks/SmoothScroll";

const About = () => {
  const theme = useTheme();
  const controls = useAnimation();

  return (
    <Box id="about-section" sx={{ padding: PaddingResizeSection()}}>
      <Box className={styles.mainAboutSection}>

        {/* Import Smooth Scroll Logic */}
        <SmoothScroll controls={controls} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <Box 
            sx={theme.typography.h3}
          >
            {"About"}
          </Box>
          <Box 
            sx={theme.typography.h6}
          >
            {"Hello, my name is Julie ! I'm Looking for a job as a developer "}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default About;
