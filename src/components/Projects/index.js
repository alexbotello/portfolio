import React, { useState, useEffect } from "react";
import Card from "./Card";
import { projectInfo } from "../../state";
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
// Use useEffect as componentDidMount to add an scroll eventlistener
// that will check if 'isComponentInView()' and then add class slide-in to
// proper html elements
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
function isComponentInView(elementId) {
  let el = document.getElementById(elementId);
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /*or $(window).width() */
  );
}

export default Projects;
