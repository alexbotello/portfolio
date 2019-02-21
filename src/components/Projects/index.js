import React, { useState, useEffect } from "react";
import Card from "./Card";
import { projectInfo } from "../../state";
import { isComponentInView } from "../../hooks";
import "./index.css";

function Projects() {
  const [projects] = useState(projectInfo);

  useEffect(() => {
    window.addEventListener("scroll", addAnimationClasses);
    return () => {
      window.removeEventListener("scroll", addAnimationClasses);
    };
  });
  return (
    <div className="Projects" id="projects">
      <div className="Title">
        <h1 id="title">Projects</h1>
        <hr id="underline" />
      </div>
      <div className="Cards" id="cards">
        {Object.keys(projects).map(key => {
          return <Card {...projects[key]} key={key} />;
        })}
      </div>
    </div>
  );
}
function addAnimationClasses() {
  let title = document.getElementById("title");
  let underline = document.getElementById("underline");
  let cards = document.getElementById("cards");
  if (isComponentInView("projects")) {
    title.classList.add("slideRight");
    underline.classList.add("slideLeft");
    cards.classList.add("slideUp");
  }
}

export default Projects;
