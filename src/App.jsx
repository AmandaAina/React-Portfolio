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
        <h2>About Me</h2>
      <p>
        Hi there! I'm a web developer with a passion for creating awesome websites and applications.
        You can learn more about me on my <a href="/about">About page</a>.
      </p>
        </Section>
        <Section id="portfolio" currentSection={currentSection}>
        <h2>Portfolio</h2>
      <p>
        Here are some of my recent projects:
      </p>
      <ul>
        <li>
          <a href="/https://amandaaina.github.io/Multiple-Choice-Quiz/">Project 1</a> - A cool project I worked on
        </li>
        <li>
          <a href="/https://amandaaina.github.io/Homework-2/">Project 2</a> - Another awesome project
        </li>
      </ul>
        </Section>
        <Section id="contact" currentSection={currentSection}>
        <h2>Contact</h2>
      <p>
        You can reach out to me via email at <a href="mailto:amandaade92@yahoo.com">example@example.com</a>,
        or connect with me on <a href="https://linkedin.com">LinkedIn</a>.
      </p>
        </Section>
        <Section id="resume" currentSection={currentSection}>
        <h2>Resume</h2>
      <p>
        Here's my <a href="/resume">resume</a> for more details about my work experience and skills.
      </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
