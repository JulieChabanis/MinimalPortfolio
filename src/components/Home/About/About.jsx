import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Box, useMediaQuery } from "@mui/material";
import styles from "./About.module.css";
import { useTheme } from "@emotion/react";

const About = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const paddingSmall = "22% 7% 0% 7%";
  const paddingMedium = "14% 6% 0% 6%";
  const paddingLarge = "10% 19% 0% 19%";
  const paddingXLarge = "6% 17% 0% 17%";

  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 959px)');
  const isLargeScreen = useMediaQuery('(min-width: 960px) and (max-width: 1299px)');
  const isXLargeScreen = useMediaQuery('(min-width: 1300px)');

  const getPadding = () => {
    if (isSmallScreen) {
      return paddingSmall;
    } else if (isMediumScreen) {
      return paddingMedium;
    } else if (isLargeScreen) {
      return paddingLarge;
    } else if (isXLargeScreen) {
      return paddingXLarge;
    }
  };

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
    <Box id="about-section" sx={{ padding: getPadding()}}>
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
