import { Box, useTheme } from "@mui/material";
import { motion, useCycle} from "framer-motion";
import React from 'react'

const HeroPage = () => {
  const theme = useTheme();
  const [isTyping, setIsTyping] = useCycle(true, false); 
  
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={theme.typography.h1}
      >
          Julie Chabanis
      </motion.div>
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={theme.typography.h2}
        >
          {isTyping ? "Develop|" : "Developper"}
        </motion.div>
    </Box>
  );
};

export default HeroPage;