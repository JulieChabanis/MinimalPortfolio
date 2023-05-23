import { ColorModeContext, useMode } from './Theme/theme'; 
import { CssBaseline, ThemeProvider } from '@mui/material';
import { motion, useCycle } from "framer-motion"
import './App.css';

function App() {
  const [theme, colorMode] = useMode();

  const TextAnimation = () => {
    // eslint-disable-next-line no-unused-vars
    const [isTyping, setIsTyping] = useCycle(true, false);

    return (
      <div>
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
      </div>
    );
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App">
          <header className="App-header">
            <TextAnimation />
          </header>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
