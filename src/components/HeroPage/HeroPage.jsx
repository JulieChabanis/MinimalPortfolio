import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./HeroPage.module.css"

const HeroPage = () => {
  const theme = useTheme();

  const words = [
    { word: 'Hello', translation: 'BONJOUR' },
    { word: 'Bonjour', translation: 'Bonjour en français'},
    { word: 'こんにちは', translation: 'Bonjour en japonais' },
    { word: 'Góðan dag', translation: 'Bonjour en islandais' },
  ];


  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [words.length]);

  return (
    <Box className={styles.heroContent}>
      <motion.div
        key={currentLanguageIndex} // Ajouter la clé pour déclencher une nouvelle animation
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={theme.typography.h1}
        transition={{ duration: 0.4 }} // Ajouter une durée de transition
      >
        {words[currentLanguageIndex].word}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={theme.typography.h2}
      >
        I'm Julie Chabanis,
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -80 }} // Initial position (outside the screen)
        animate={{ opacity: 1, x: 0 }} // Final position (slide in from left)
        style={theme.typography.h3}
      >
        DEVELOPPER
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -1200 }} // Initial position (outside the screen)
        animate={{ opacity: 1, x: 0 }}
        style={theme.typography.h4}
      >
        From Montpellier, FR
      </motion.div>
    </Box>
  );
};

export default HeroPage;
