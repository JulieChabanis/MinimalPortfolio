import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./HeroPage.module.css";

const HeroPage = () => {
  const theme = useTheme();
  const animationDuration = 10000; // Durée de l'animation en millisecondes

  
  return (
    <Box className={styles.mainHeroPageSection}>
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
        <motion.div
          style={{
            ...theme.typography.h1,
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          animate={{
            x: ["100%", "-100%"], // Déplace les mots de 100% de la largeur de l'écran à droite à -100% de la largeur de l'écran à gauche
          }}
          transition={{
            duration: animationDuration / 1000,
            ease: "linear",
            repeat: Infinity, // Répète l'animation en continu
            repeatType: "loop", // Répète en boucle les valeurs de la propriété `x`
          }}
        >
          Hello Bonjour こんにちは Góðan dag
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroPage;
