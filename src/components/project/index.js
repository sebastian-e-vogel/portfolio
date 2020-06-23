import React from "react";
import "./styles.css";
import projects from "./projects";

const Project = () => {
  return (
    <div className="card">
      {projects.map((project) => {
        return (
          <div className="container-data">
            <a href={project.link}>
              <img href="" src={project.image} alt="product" />
              <h3 className="card-title">{project.projectName}</h3>
              <p className="card-description">{project.description}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
