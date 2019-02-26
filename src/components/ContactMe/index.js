import React from "react";
import "./index.css";

function ContactMe() {
  return (
    <div className="Contact">
      <div className="CTA">
        <h1>Contact Me</h1>
        <p>
          Want to hire me? Go ahead and send me a message, I'd love to chat.
        </p>
        <button className="">
          <a href="mailto:alexander.j.botello@gmail.com">
            <i className="far fa-envelope" /> Message Me
          </a>
        </button>
      </div>
    </div>
  );
}

export default ContactMe;
