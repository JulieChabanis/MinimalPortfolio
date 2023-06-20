import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Box, Divider, Grid } from "@mui/material";
import styles from "./About.module.css";
import { useTheme } from "@emotion/react";

import PaddingResizeSection from "../../hooks/PaddingResizeSection";
import SmoothScroll from "../../hooks/SmoothScroll";

import ProfilUser from '../../../assets/images/profilUser.png'

const About = () => {
  const theme = useTheme();
  const controls = useAnimation();

  return (
    <Box id="about-section" sx={{ padding: PaddingResizeSection()}}>
      <Box className={styles.mainAboutSection}>

        {/* Import Smooth Scroll Logic */}
        <SmoothScroll controls={controls} />

        <Grid container spacing={12}>
          <Grid item xs={12} md={6} lg={5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <Box 
                sx={{ ...theme.typography.h8, position: "relative" }}
              >
                {"About ❋"}
              </Box>
              <Box className={styles.imageProfil} sx={{  zIndex: -1 }}>
                <img src={ProfilUser} alt="Julie Chabanis" />
              </Box>
              <Box 
                sx={theme.typography.h6}
              >
                {"Hello there! My name is "}
                <strong>{"Julie Chabanis,"}</strong>
                 {" and I'm 29 years old. I live in the city of Montpellier, south of France."}
                 <strong>{" As I work, I am accompanied by my beloved pug, Léon."}</strong>
              </Box>
              <Divider sx={{ margin: "18px 0 0 0" }} />
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
                {"New Life"}
              </Box>
              <Box 
                sx={theme.typography.h6}
              >
                {"I'm new to the beautiful world of coding. Before that, "}
                <strong>{"I worked in the field of Communication and Marketing."}</strong>
                {" For over "}
                <strong>{"10 years now,"}</strong>
                {"I have also been "}
                <strong>{"a selt-taught DPT PRINT graphic designer "}</strong>
                {"(InDesign - Photoshop - Illustrator). "}
                {"So, I left my job in communication"}
                <strong>{"to pursue studies in computer programming."}</strong>
              </Box>
              <Divider sx={{ margin: "2rem 0" }} />
            <Box 
                sx={theme.typography.h1}
              >
                {"New skills"}
              </Box>
              <Box 
                sx={theme.typography.h6}
              >
                {"Today, I use different technologies to implement solutions:"}
                <strong>{"front-end (REACT JS, Axios) and back-end (databases like PostgreSQL, MySQL, JAVA, SpringBoot...) "}</strong> 
                {"I'm open to discovering new frameworks and languages!"}
              </Box>
              <Box 
                sx={theme.typography.h6}
              >
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
