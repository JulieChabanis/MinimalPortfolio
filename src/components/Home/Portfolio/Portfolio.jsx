import { Box, useTheme } from '@mui/material';
import React, { forwardRef, useEffect, useRef } from 'react';
import styles from './Portfolio.module.css';
// import { tokens } from '../../Theme/theme';

import PaddingResizeSection from '../../hooks/PaddingResizeSection';
import SmoothScroll from '../../hooks/SmoothScroll';
import { useAnimation } from 'framer-motion';


const Portfolio = forwardRef (() => {
  const theme = useTheme();
  const controls = useAnimation();
  const parallaxRef = useRef(null);
  // const colors = tokens(theme.palette.mode)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elementTop = parallaxRef.current.offsetTop;
      const distance = scrollY - elementTop;
      const baseVelocity = 2; //  help : 2=leftToRight, -2=Right to left
      const moveBy = baseVelocity * distance;
      parallaxRef.current.style.transform = `translateX(${moveBy}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box id="portfolio-section" sx={{ padding: PaddingResizeSection()}}>
    <Box sx={{ fontSize: theme.typography.h8, marginBottom: "2.2rem" }}>
      <Box className={styles.titleSection} ref={parallaxRef}>
         {'• Portfolio'}
      </Box>
      <Box className={styles.mainPortfolioSection} >

      {/* Import Smooth Scroll Logic */}
      <SmoothScroll controls={controls} />
        <Box

        sx = {{
          display: 'flex',
          justifyContent: 'start',
          gap: '2rem',
          marginTop: '2rem'
        }}
      >
          {/* Items Category Section */}
          <Box 
            sx={{ 
              fontSize: theme.typography.h11,
              backgroundColor: theme.palette.mode === 'light' ? 'white' : 'black',
              padding: "12px",
              borderRadius: "10px"
            }}
          >
            Graphic Design
          </Box>
          <Box 
            sx={{ 
              fontSize: theme.typography.h11,
              backgroundColor: theme.palette.mode === 'light' ? 'white' : 'black',
              padding: "12px",
              borderRadius: "10px"
            }}
          >
            Illustration
          </Box>
          <Box 
            sx={{ 
              fontSize: theme.typography.h11,
              backgroundColor: theme.palette.mode === 'light' ? 'white' : 'black',
              padding: "12px",
              borderRadius: "10px"
            }}
          >
            Programming
          </Box>
      </Box>
     </Box> 
    </Box>
    </Box>
  )
})

export default Portfolio;