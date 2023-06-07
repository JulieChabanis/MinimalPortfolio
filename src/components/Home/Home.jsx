import HeroPage from "./HeroPage/HeroPage";
import WorkExperience from "./WorkExperience/WorkExperience";
import Skills from "./Skills/Skills";
import styles from "./Home.module.css";
import React, { useEffect, useRef } from 'react'
import { Box } from "@mui/system";

const Home = () => {
  const heropageRef = useRef(); 
  const workExperienceRef = useRef(); 
  const skillsRef = useRef();

  return (
    <Box className={styles.mainHome}>
      <HeroPage ref={heropageRef}
      />
      <WorkExperience ref={workExperienceRef} />
      <Skills ref={skillsRef} />
    </Box>
  )
}

export default Home