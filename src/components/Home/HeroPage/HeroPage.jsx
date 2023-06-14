import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./HeroPage.module.css";
import { ParallaxText } from "../../Effects/ParallaxText/ParallaxText";

const HeroPage = () => {
  const theme = useTheme();
  
  return (
    <Box id="heropage-section" className={styles.mainHeroPageSection}>

      <Box sx={theme.typography.h4} className={styles.localisationSection}>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {'❋ Based in Montpellier ❋'}
        </motion.div>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {'South of France, FR'}
        </motion.div>
      </Box>

      <Box className={styles.heroContent}>
        <Box sx={theme.typography.h5}>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {"I'm Julie Chabanis,"}
        </motion.div>
        </Box>

        <Box  sx={theme.typography.h2}>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1
          }}
        >
        {'{* LOOKING FOR'}
        </motion.div>
        </Box>
        <Box sx={theme.typography.h3}>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1
          }}
        >
         {'❋ A JOB AS A'}
        </motion.div>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1
          }}
        >
         {'DEVELOPPER *}'}
        </motion.div>
        </Box>
      </Box>

      <Box className={styles.helloBox} sx={theme.typography.h1} >
        <ParallaxText baseVelocity={-5}>Hello • Bonjour • こんにちは • Góðan dag • </ParallaxText>
      </Box>
    </Box>
  );
};

export default HeroPage;
