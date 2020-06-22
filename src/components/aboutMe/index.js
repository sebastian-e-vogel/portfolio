import React from "react";
import "./styles.css";

const AboutMe = () => {
 
  return (
    <section className="profile">
      <div className="container-profile">
        <img src="#" className="photo" alt="profile" />
        <p className="profile-description">
          De manera autodidacta adquirí el conocimiento en los lenguajes de
          programación después mencionados, ya que estoy en constante
          capacitación. Actualmente estoy cursando el bootcamp de "Front-end
          Avanzado en React" de Acamica donde no sólo se aprende a desarrollar
          con el lenguaje, sino tambien se brinda la experiencia de trabajar en
          equipo y el conocimiento en herramientas como:{" "}
          <span>Trello, Slack</span> o metodologias ágiles como:{" "}
          <span>SCRUM o Kanban</span>.
          <br />
          Me gusta aprender nuevas tecnologías e investigar constantemente, por
          mi cuenta estoy incursionando en lenguajes como:{" "}
          <span>React Native, Typescript, Angular y SASS</span>.
          <br />
          Mi objetivo principal es integrarme en una empresa donde trabajen con
          buenas prácticas para poder explotar mi potencial y aportar desde mi
          lado con los conocimientos ya adquiridos.
        </p>
      </div>
    </section>
  );
};
export default AboutMe;
