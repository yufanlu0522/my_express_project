import './App.css';

import MainPage from './Pages/mainPage.js';
import NavBar from './NavBar/index';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/about';
import Resume from './Pages/resume';
import Projects from './Pages/projects';
import Other from './Pages/other';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/other" element={<Other />} />
        </Routes>
    </Router>
  );
}

export default App;
