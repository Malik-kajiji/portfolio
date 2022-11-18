import React, { useState } from 'react';
import './styles/global.scss';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SkillSet from './components/SkillSet';
import Contact from './components/Contact';
import BackGround from './components/BackGround';

function App() {
  const [currentSection,setCurrentSection] = useState('introduction');
  return (
    <div className="App">
      <BackGround setCurrentSection={setCurrentSection}>
        <Hero currentSection={currentSection} />
        <Projects currentSection={currentSection} />
        <SkillSet currentSection={currentSection} />
        <Contact currentSection={currentSection} />
      </BackGround>
    </div>
  );
}

export default App;
