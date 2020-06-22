import React from 'react';
import './App.css';

import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Menu from "./components/menu";



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
    </div>
  );
}

export default App;
