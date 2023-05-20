import { ColorModeContext, useMode } from './UI/Theme/theme'; 
import { CssBaseline, ThemeProvider } from '@mui/material';
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
            >
              Julie Chabanis
            </motion.div>
          </div>
            </header>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
