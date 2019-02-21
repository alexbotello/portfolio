import React, { useState } from "react";
import SocialItem from "./SocialItem";
import { socialWebsites } from "../../state";
import "./index.css";

function SocialNav() {
  const [social] = useState(socialWebsites);

  return (
    <div className="Social">
      <ul className="slideLeft">
        {Object.keys(social).map(key => {
          return <SocialItem {...social[key]} key={key} />;
        })}
      </ul>
    </div>
  );
}

export default SocialNav;
