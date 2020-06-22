import React from 'react';
import './App.css';

import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Menu from "./components/menu";
import Project from './components/project';




 const App = () => {
  return (
    <div className="aplication">
          <Menu />
      <section className="container-welcome">
        <div className="welcome" />
      </section>
      <section className="aboutMe">
        <AboutMe />
      </section>
           <section className="skills">
        <Skills />
      </section>
       <section className="project">
          <Project />
          <Project />
          <Project />
        </section>
    </div>
  );
}

export default App;
