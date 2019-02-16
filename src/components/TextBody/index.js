import React from "react";
import "./index.css";

function TextBody() {
  return (
    <div className="Text">
      <p>
        Hello! I'm <span>Alexander Botello</span>
        <br />
        I'm a full-stack developer living in Austin.
      </p>
      <button onClick={() => scrollToProjects()}> See my work -></button>
    </div>
  );
}

function scrollToProjects() {
  document
    .getElementById("projects")
    .scrollIntoView({ block: "start", behavior: "smooth" });
}
export default TextBody;
