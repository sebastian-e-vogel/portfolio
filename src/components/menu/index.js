import React from "react";
import "./styles.css";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <a href="#seb"> SEB VOG </a>
      </div>
      <div className="header-navigation">
        <Link
          activeClass="active"
          to="aboutMe"
          spy={true}
          smooth={true}
          duration={500}
        >
          Sobre Mi
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
        >
          Proyectos
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};
export default Menu;
