import React from "react";
import "./styles.css";

const Menu = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <a href="#logo" > SEB VOG </a>
      </div>
      <div className="header-navigation">
        <a href="#aboutMe">
          Sobre Mi
        </a>
        <a href="#skills">
          Skills
        </a>
        <a href="#project">
          Proyectos
        </a>
        <a href="#contact">
          Contacto
        </a>
      </div>
    </div>
  );
};
export default Menu;
