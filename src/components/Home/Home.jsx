import React, { useRef } from 'react'
import { Box } from "@mui/system";

import HeroPage from "./HeroPage/HeroPage";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Home = () => {
  const heropageRef = useRef(); 
  const aboutRef = useRef(); 
  const ResumeRef = useRef();
  const PortfolioRef = useRef(); 
  const ContactRef = useRef(); 
  const FooterRef = useRef(); 

  return (
    <Box>
      <HeroPage ref={heropageRef}/>
      <Portfolio ref={PortfolioRef}/>
      <Resume ref={ResumeRef} />
      <About ref={aboutRef} />
      <Contact ref={ContactRef}/>
      <Footer ref={FooterRef}/>
    </Box>
  )
}

export default Home