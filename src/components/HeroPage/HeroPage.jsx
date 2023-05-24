import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroPage = () => {
  const theme = useTheme();

  const words = [
    { word: 'HELLO', translation: 'BONJOUR' },
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
    <Box>
    <motion.div
        key={currentLanguageIndex} // Ajouter la clé pour déclencher une nouvelle animation
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={theme.typography.h2}
        transition={{ duration: 0.5 }} // Ajouter une durée de transition
      >
        {words[currentLanguageIndex].word}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={theme.typography.h1}
      >
        Julie Chabanis
      </motion.div>
    </Box>
  );
};

export default HeroPage;
