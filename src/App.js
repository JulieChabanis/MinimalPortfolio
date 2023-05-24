import { ColorModeContext, useMode } from './components/Theme/theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/global/Navbar/Navbar';
import ThemeToggleButton from './components/global/ThemeToggle/ThemeToggle';
import HeroPage from './components/HeroPage/HeroPage';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App">
          <NavBar/>
          <ThemeToggleButton/>
          <Routes>
            <Route path="/" element={<HeroPage/>}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
