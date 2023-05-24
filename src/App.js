import { ColorModeContext, useMode } from './components/UItheme/theme'; 
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { motion, useCycle } from "framer-motion"
import './App.css';

import NavBar from './components/global/Navbar/Navbar';

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
          <NavBar/>
          <header className="App-header">
          <Routes>
            <Route path="/" element={<TextAnimation/>}></Route>
          </Routes>
          </header>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
