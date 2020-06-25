import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-scroll";
import styled from "styled-components";
import { Dehaze } from "@styled-icons/material/";

const MenuResponsive = styled(Dehaze)`
  color: white;
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: none;
  &:hover {
    color: #4b6cc1;
  }
  @media (max-width: 960px) {
    display: flex;
  }
`;

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <div className="header">
      <div className="header-logo">
        <a href="#seb"> SEB VOG </a>
      </div>
      <div className="header-navigation">
        <MenuResponsive onClick={() => setShowMenu(!showMenu)} />
        <div className={showMenu ? "showMenu" : "hiddenMenu"}>
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
            className="centerLink"
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
    </div>
  );
};
export default Menu;
