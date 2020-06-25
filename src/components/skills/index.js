import React from "react";
import technologies from "./technologies";
import "./styles.css";

const Skills = () => {
  return (
    <div className="technologies-container">
      <h1 className="skills-title"> Skills </h1>
      <div className="technologies">
        {technologies.mainTechnologies.map((technologie) => {
          return (
            <div key={technologie.name} className="technologie">
              <div className="icon-technologie">{technologie.component}</div>
              <span className="line" />
              <p className="technologie-name">{technologie.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
