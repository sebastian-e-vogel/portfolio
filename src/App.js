import React from 'react';
import './App.css';

import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";



 const App = () => {
  return (
    <div className="aplication">
      <section className="container-welcome">
        <div className="welcome" />
      </section>
      <section className="aboutMe">
        <AboutMe />
      </section>
           <section className="skills">
        <Skills />
      </section>
    </div>
  );
}

export default App;
