import styles from "./Home.module.css";
import React, { useRef } from 'react'
import { Box } from "@mui/system";

import HeroPage from "./HeroPage/HeroPage";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";

const Home = () => {
  const heropageRef = useRef(); 
  const aboutRef = useRef(); 
  const ResumeRef = useRef();
  const PortfolioRef = useRef(); 

  return (
    <Box className={styles.mainHome}>
      <HeroPage ref={heropageRef}
      />
      <About ref={aboutRef} />
      <Resume ref={ResumeRef} />
      <Portfolio ref={PortfolioRef}
      />
    </Box>
  )
}

export default Home