import { Box, Button, Typography } from '@mui/material';
import React, { forwardRef, useCallback } from 'react';
import styles from './Contact.module.css';
import SendIcon from '@mui/icons-material/Send';
import { motion, useAnimation } from 'framer-motion';

import PaddingResizeSection from '../../hooks/PaddingResizeSection';

const Contact = forwardRef(() => {
  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const buttonControls = useAnimation(); // Add animation controls for the button

  const handleScroll = useCallback(() => {
    const contactSection = document.getElementById('contact-section');
    const offsetTop = contactSection.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > offsetTop) {
      // Title Animation
      titleControls.start({ opacity: 1, y: 0, transition: { duration: 1, type: 'spring', damping: 13 } });

      // Subtitle Animation with a slight delay and a longer duration
      subtitleControls.start({ opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.3, type: 'spring', damping: 13 } });

      // Button Animation with a slight delay and a longer duration
      buttonControls.start({ opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.6, type: 'spring', damping: 13 } });
    } else {
      titleControls.start({ opacity: 0, y: '200%' });
      subtitleControls.start({ opacity: 0, y: '200%' });
      buttonControls.start({ opacity: 0, y: '200%' });
    }
  }, [titleControls, subtitleControls, buttonControls]);

  // Add scroll event listener to trigger animations on scroll
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Box id="contact-section">
      <Box sx={{ padding: PaddingResizeSection() }}>
        {/*Content*/}
        <Box>
          <Box className={styles.contactBox}>
            <motion.div 
              initial={{ opacity: 0, y: '100%' }}  
              animate={titleControls}
              className={styles.titleBox}
            >
              <Typography 
                variant="h25" 
              >
                {"Interested in connecting?"}
              </Typography>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: '100%' }} 
              animate={subtitleControls}
              className={styles.subtitleBox}
            >
              <Typography 
                variant="h26" 
              >
                {"Feel free to reach out to me on LinkedIn!"}
              </Typography>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: '100%' }} 
              animate={buttonControls}
              className={styles.messageButton} 
            >
              {/* Apply the animation controls to the button */}
              <Button 
                variant="outlined" 
                endIcon={<SendIcon />}
              >
                Send me a message
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default Contact;
