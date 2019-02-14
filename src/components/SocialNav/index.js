import React, { useState } from "react";
import SocialItem from "./SocialItem";
import "./index.css";

const socialWebsites = {
  twitter: {
    src: "/images/ctwit.png",
    url: "https://www.twitter.com/alexbotello/",
    class: "twitter"
  },
  github: {
    src: "/images/gh.png",
    url: "https://github.com/alexbotello"
  },
  linkedin: {
    src: "/images/ln.png",
    url: "https://www.linkedin.com/in/alexander-botello-025019131/",
    class: "linkedin"
  }
};

function SocialNav() {
  const [social] = useState(socialWebsites);

  return (
    <ul className="Social">
      {Object.keys(social).map(key => {
        return <SocialItem {...social[key]} key={key} />;
      })}
    </ul>
  );
}

export default SocialNav;
