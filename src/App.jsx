// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('about');

  const handleNavigation = (sectionId) => {
    setCurrentSection(sectionId);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Section id="about" currentSection={currentSection}>
          {/* Content for About Me section */}
        </Section>
        <Section id="portfolio" currentSection={currentSection}>
          {/* Content for Portfolio section */}
        </Section>
        <Section id="contact" currentSection={currentSection}>
          {/* Content for Contact section */}
        </Section>
        <Section id="resume" currentSection={currentSection}>
          {/* Content for Resume section */}
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
