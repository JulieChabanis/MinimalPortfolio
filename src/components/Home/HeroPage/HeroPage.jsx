import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./HeroPage.module.css";

const HeroPage = () => {
  const theme = useTheme();
  
  return (
    <Box id="heropage-section" className={styles.mainHeroPageSection}>
      <Box className={styles.localisationSection}>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={theme.typography.h4}
        >
           ❋ Based in Montpellier ❋
        </motion.div>

        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={theme.typography.h4}
        >
           South of France, FR
        </motion.div>
      </Box>

      <Box className={styles.heroContent}>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={theme.typography.h5}
        >
          Julie Chabanis
        </motion.div>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1
          }}
          style={theme.typography.h3}
        >
          ✺ DESIGNER
        </motion.div>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1
          }}
          style={theme.typography.h3}
        >
          DEVELOPPER ❋ 
        </motion.div>
      </Box>

      <Box className={styles.helloBox}>
        <Typography
          style={theme.typography.h1}
        >
          Hello Bonjour こんにちは Góðan dag
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroPage;
