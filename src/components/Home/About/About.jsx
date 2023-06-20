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
          <Grid item xs={12} sm={5} md={5} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ ...theme.typography.h8 }}>
                {"• About"}
              </Box>
              <Box className={styles.imageProfil}>
                <img src={ProfilUser} alt="Julie Chabanis" />
              </Box>
              <Box 
                sx={theme.typography.h6}
              >
                {"Hey there! I'm "}
                <strong>{"Julie Chabanis,"}</strong>
                 {" 29 years old from Montpellier, south of France. "}
                 <strong>{"Alongside me at work is my beloved pug, Léon."}</strong>
              </Box>
              <Divider sx={{ margin: "4rem 0 0 0" }} />
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={7} md={7} lg={7}>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <Box 
                sx={{ ...theme.typography.h8, }}
              >
                {"New Life"}
              </Box>
              <Box 
                sx={theme.typography.h6}
              >
                {"I'm new to the wonderful world of coding. I previously "}
                <strong>{"worked in Marketing & Communication "}</strong>
                {"and have been a "}
                <strong>{"self-taught DPT Graphic Designer for over 10 years. "}</strong>
                {"(InDesign - Photoshop - Illustrator). I finally left my job in Communication "}
                <strong>{"to pursue studies in computer programming."}</strong>
              </Box>
              <Divider sx={{ margin: "4rem 0" }} />
            <Box 
                sx={{ ...theme.typography.h8, marginTop: "-25px" }}
              >
                {"New skills"}
              </Box>
              <Box 
                sx={theme.typography.h6}
              >
                {"I now use a variety of technologies to implement solutions:"}
                <strong>{"front-end and back-end (React JS, Axios, databases, JAVA, SpringBoot...) "}</strong> 
                {"and I'm up for discovering new frameworks and languages to keep learning and improving!"}
              </Box>
              <Divider sx={{ margin: "2rem 0" }} />
              <Box 
                sx={theme.typography.h6}
              >
                {"I remain a design enthusiast with a preference for front-end developpement."}
                <strong>{"Last but not least, I'm looking for a job in the field so feel free to contact me!"}</strong>
              </Box>

            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
