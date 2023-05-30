import { ColorModeContext, useMode } from './components/Theme/theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/global/Navbar/Navbar';
import ThemeToggleButton from './components/global/ThemeToggle/ThemeToggle';
import Home from './components/Home/Home';
import WorkExperience from './components/Home/WorkExperience/WorkExperience';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App">
        <NavBar/>
        <ThemeToggleButton/>  
          <header className='App-header'>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
            </Routes>
          </header>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
