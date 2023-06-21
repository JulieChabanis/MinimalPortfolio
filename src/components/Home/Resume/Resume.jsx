import { useAnimation } from "framer-motion";
import React  from 'react';
import styles from './Resume.module.css';
import { Box, Grid, useTheme } from "@mui/material";

import { ParallaxSectionSubtitle } from "../../Effects/ParallaxSectionTitle/ParallaxSectionTitle";

import PaddingResizeSection from "../../hooks/PaddingResizeSection";
import SmoothScroll from "../../hooks/SmoothScroll";

const Resume = React.forwardRef(() => {
  const theme = useTheme();
  const controls = useAnimation();

  return (
    <Box id="resume-section" sx={{ padding: PaddingResizeSection()}}>
      <Box className={styles.mainSkillsSection}>
        <SmoothScroll controls={controls} />
        <Box sx={{ fontSize: theme.typography.h8, marginBottom: "2.2rem" }}>
            <ParallaxSectionSubtitle baseVelocity={-2}>• Resume</ParallaxSectionSubtitle>
          </Box>
        <Grid container spacing={12}>
          <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ fontSize: theme.typography.h2, marginBottom: "1.4rem"}}>
                Education
              </Box>
              <Box sx={{ fontSize: theme.typography.h6}}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
              </Box>
              <Box sx={{ fontSize: theme.typography.h2, marginBottom: "1.4rem", marginTop: "5rem"}}>
                Education
              </Box>
              <Box sx={{ fontSize: theme.typography.h6}}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
              </Box>
          </Grid>
          <Grid item xs={12} md={6} ld={6}>
            <Box sx={{ fontSize: theme.typography.h2, marginBottom: "1.4rem"}}>
                Experience
            </Box>
            <Box sx={{ fontSize: theme.typography.h6}}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
            </Box>
          </Grid>  

        </Grid>
      </Box>
    </Box>
  )
}); 

export default Resume