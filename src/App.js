import { motion } from "framer-motion"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contenu animé avec Framer Motion
      </motion.div>
    </div>
      </header>
    </div>
  );
}

export default App;
