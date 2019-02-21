import React from "react";
import "./index.css";

function TextBody() {
  return (
    <div className="Text">
      <p className="Name slideDown">
        Hello,
        <br />
        I'm <span>Alexander Botello</span>
        <br />
      </p>
      <p className="Profile slideUp">
        Full-stack developer in Austin with a passion for building software
        experiences that positively impacts lives.
      </p>
      <button
        className="slideLeft"
        id="WorkButton"
        onClick={() => scrollToProjects()}
      >
        See my work
      </button>
    </div>
  );
}

function scrollToProjects() {
  document
    .getElementById("projects")
    .scrollIntoView({ block: "start", behavior: "smooth" });

  document.getElementById("bubb").classList.add("bubbles-hidden");
}
export default TextBody;
