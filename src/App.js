import React from "react";
import "./App.css";

import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Menu from "./components/menu";
import Project from "./components/project";
import Contact from "./components/contact";
import { styled } from 'styled-components';

const App = () => {
  return (
    <div className="aplication">
      <Menu />
      <section className="container-welcome">
        <div className="welcome" />
      </section>
      <div className="triangle" />
      <div className="triangle-two" />
      <section className="aboutMe">
        <AboutMe />
      </section>
      <div className="triangle-inverted" />
      <div className="triangle-inverted-two" />
      <section className="skills">
        <Skills />
      </section>
       <div className="triangle" style={{background: "#f7f7f7"}}/>
      <div className="triangle-two" style={{background: "#ece4d8"}}/>
      <section className="projects">
        <h1 className="project-title"> Proyectos </h1>
        <div className="project">
          <Project />
        </div>
      </section>
        <div className="arrow" />
      <div className="arrow-two" />
      <section className="contact">
        <div>
          <p>CONTACTO</p>
        </div>
        <div>
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default App;
