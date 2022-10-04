import { Routes, Route } from 'react-router-dom';

import NavBar from './components/navigation/Navbar'
import HomePage from './components/routes/HomePage';
import About from './components/routes/About';
import SkillSet from './components/routes/SkillSet';
import Projects from './components/routes/Projects';
import Contact from './components/routes/Contact';

import "./App.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/skillset' element={<SkillSet />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
