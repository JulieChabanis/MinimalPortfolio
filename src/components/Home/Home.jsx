import HeroPage from "./HeroPage/HeroPage";
import About from "./About/About";
import Skills from "./Skills/Skills";
import styles from "./Home.module.css";
import React, { useRef } from 'react'
import { Box } from "@mui/system";

const Home = () => {
  const heropageRef = useRef(); 
  const aboutRef = useRef(); 
  const skillsRef = useRef();

  return (
    <Box className={styles.mainHome}>
      <HeroPage ref={heropageRef}
      />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
    </Box>
  )
}

export default Home