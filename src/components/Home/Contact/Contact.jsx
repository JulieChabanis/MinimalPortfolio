import { Box, useTheme } from '@mui/material'
import React, { forwardRef, useEffect, useRef } from 'react'
import styles from './Contact.module.css'

import PaddingResizeSection from '../../hooks/PaddingResizeSection';

const Contact = forwardRef (() => {
  const theme = useTheme();
  const parallaxRef = useRef(null);

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
    <Box id="contact-section" className={styles.mainContactSection} sx={{ padding: PaddingResizeSection()}}>
    <Box sx={{ fontSize: theme.typography.h8, marginBottom: "2.2rem" }}>
      <Box className={styles.titleSection} ref={parallaxRef}>
         {'• Contact me'}
        </Box>
    </Box>
    </Box>
  )
})

export default Contact;