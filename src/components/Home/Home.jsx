import HeroPage from "./HeroPage/HeroPage";
import About from "./About/About";
import Resume from "./Resume/Resume";
import styles from "./Home.module.css";
import React, { useRef } from 'react'
import { Box } from "@mui/system";

const Home = () => {
  const heropageRef = useRef(); 
  const aboutRef = useRef(); 
  const ResumeRef = useRef();

  return (
    <Box className={styles.mainHome}>
      <HeroPage ref={heropageRef}
      />
      <About ref={aboutRef} />
      <Resume ref={ResumeRef} />
    </Box>
  )
}

export default Home