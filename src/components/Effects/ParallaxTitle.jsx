import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h1>
    </div>
  );
};

export default About;
