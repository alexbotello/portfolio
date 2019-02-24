import React from "react";
// import React, { useState, useEffect } from "react";
import Input from "./Input";
import "./index.css";

function ContactMe() {
  return (
    <div className="Contact">
      <div className="CTA">
        <h1>Contact Me</h1>
        <p>
          Want to hire me? Go ahead and send me a message, I'd love to chat.
        </p>
      </div>
      <div className="Form">
        <div className="UserInfo">
          <Input label="Name" name="name" />
          <Input label="Email" name="email" />
        </div>
        <div className="Message">
          <Input label="Subject" name="subject" />
          <textarea placeholder="Message" />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
