import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Box } from "@mui/material";
import styles from "./About.module.css";
import { useTheme } from "@emotion/react";
import PaddingResizeSection from "../../hooks/PaddingResizeSection";

const About = () => {
  const theme = useTheme();
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollPosition = scrollY + windowHeight;
    const elementPosition = 1;

    if (scrollPosition > elementPosition) {
      controls.start({ opacity: 1, y: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box id="about-section" sx={{ padding: PaddingResizeSection()}}>
      <Box className={styles.mainAboutSection}>
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
            {"Hello, my name is Julie ! I'm Looking for a job as a developper "}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default About;
