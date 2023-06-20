import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Box, Divider, Grid } from "@mui/material";
import styles from "./About.module.css";
import { useTheme } from "@emotion/react";

import PaddingResizeSection from "../../hooks/PaddingResizeSection";
import SmoothScroll from "../../hooks/SmoothScroll";

const About = () => {
  const theme = useTheme();
  const controls = useAnimation();

  return (
    <Box id="about-section">
      <Box className={styles.mainAboutSection} sx={{ padding: PaddingResizeSection()}}>

        {/* Import Smooth Scroll Logic */}
        <SmoothScroll controls={controls} />

        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <Box 
                sx={theme.typography.h3}
              >
                {"❋ About"}
              </Box>
              <Box 
                sx={theme.typography.h6}
              >
                {"Hello there! My name is Julie Chabanis, and I'm 29 years old. I reside in the city of Montpellier in the south of France. As I work, I am accompanied by my beloved pug, Léon."}
              </Box>
              <Divider sx={{ margin: "16px 0" }} />
              <Box 
                sx={theme.typography.h1}
              >
                {"New Life"}
              </Box>
              <Box 
                sx={theme.typography.h6}
              >
                {"I'm new to the beautiful world of coding. Before that, I whord in the field of Communication and Marketing."}
                {"For over 10 years now, I have also been a selt-taught DPT PRINT graphic designer (InDesign - Photoshop - Illustrator)."}

                {"I had been thinking about it for years! So, I left my job in communication to pursue studies in computer programming."}
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
            <Box 
                sx={theme.typography.h1}
              >
                {"New skills"}
              </Box>
              <Box 
                sx={theme.typography.h6}
              >
                {"Today, I use different technologies to create tailored solutions: front-end (React JS, Axios) and back-end (databases like PostgreSQL, MySQL, JAVA, SpringBoot...) I'm open to discovering new frameworks and languages!"}
                {"I have kept my passion for design and have a preference for front-end development! I want to keep learning and improving! "}
                {" And of course, the most important thing is that I'm looking for a job in this field. Don't hesitate to reach out to me! It would be a pleasure to connect with you."}
              </Box>

            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
