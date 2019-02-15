import React, { useState } from "react";
import Card from "./Card";
import { projectInfo } from "../../state";
import "./index.css";

function Projects() {
  const [projects] = useState(projectInfo);

  return (
    <div className="Projects" id="projects">
      <div className="Title">
        <h1>Projects</h1>
        <hr />
      </div>
      <div className="Cards">
        {Object.keys(projects).map(key => {
          return <Card {...projects[key]} key={key} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
