// Section.js
import React from 'react';

function Section({ id, currentSection, children }) {
  return (
    <section id={id} className={currentSection === id ? 'active' : ''}>
      {children}
    </section>
  );
}

export default Section;
