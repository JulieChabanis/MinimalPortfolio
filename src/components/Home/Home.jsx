import HeroPage from "./HeroPage/HeroPage";
import WorkExperience from "./WorkExperience/WorkExperience";
import Skills from "./Skills/Skills";
import styles from "./Home.module.css";
import React, { useEffect, useRef } from 'react'
import { Box } from "@mui/system";

const Home = () => {
  const heropage = useRef(); 
  const workExperience = useRef(); 

  useEffect(() => {
    const sections = [heropage, workExperience];

  });

  return (
    <Box className={styles.mainHome}>
      <HeroPage
        sectionRef={heropage}
      />
      <WorkExperience />
      <Skills
      />
    </Box>
  )
}

export default Home