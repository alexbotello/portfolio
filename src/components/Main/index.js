import React, { useState, useEffect } from "react";

import TextBody from "../TextBody";
import SocialNav from "../SocialNav";
import Bubbles from "../Bubbles";
import { isComponentInView } from "../../hooks";
import "./index.css";

function MainPage() {
  const [showBubbles, toggleBubbles] = useState(true);

  function hideBubbles() {
    if (isComponentInView("WorkButton")) toggleBubbles(true);
    else toggleBubbles(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", hideBubbles);
    return () => {
      window.removeEventListener("scroll", hideBubbles);
    };
  });
  return (
    <div className="Container" id="container">
      {showBubbles ? <Bubbles /> : null}
      <TextBody />
      <SocialNav />
    </div>
  );
}

export default MainPage;
