import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./HeroPage.module.css";

const HeroPage = () => {
  const theme = useTheme();

  const words = [
    { word: 'Hello,', translation: 'BONJOUR' },
    { word: 'Bonjour,', translation: 'Bonjour en français'},
    { word: 'こんにちは', translation: 'Bonjour en japonais' },
    { word: 'Góðan dag,', translation: 'Bonjour en islandais' },
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
    <Box>
      <Box className={styles.LocalisationSection}>
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
          key={currentLanguageIndex}
          initial={{ y: "100%", opacity: 0}}
          animate={{ y: 0, opacity: 1 }}
          style={theme.typography.h1}
        >
          {words[currentLanguageIndex].word}
        </motion.div>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={theme.typography.h2}
        >
          I'm Julie Chabanis
        </motion.div>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1
          }}
          style={theme.typography.h3}
        >
          DEVELOPPER ❋ ✺
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroPage;
