import React from "react";
import "./index.css";

function ContactMe() {
  return (
    <div className="Contact">
      <div className="CTA">
        <h2>Contact Me</h2>
        <p>
          Want to hire me? Go ahead and send me a message, I'd love to chat.
        </p>
        <button className="">
          <a href="mailto:alexander.j.botello@gmail.com">
            <i className="far fa-envelope" /> Message Me
          </a>
        </button>
      </div>
      <div className="TM">© 2019 Alex Botello. All rights reserved</div>
    </div>
  );
}

export default ContactMe;
