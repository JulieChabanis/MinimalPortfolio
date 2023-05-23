import { ColorModeContext, useMode } from './UI/Theme/theme'; 
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { motion } from "framer-motion"
import './App.css';

function App() {
  const [theme, colorMode] = useMode(); 


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className="App">
            <header className="App-header">
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
              Developper
            </motion.div>
          </div>
            </header>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
