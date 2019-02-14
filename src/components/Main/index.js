import React from "react";

import Image from "../Image";
import TextBody from "../TextBody";
import SocialNav from "../SocialNav";
import "./index.css";

function MainPage() {
  return (
    <div className="Container">
      <Image />
      <TextBody />
      <SocialNav />
    </div>
  );
}

export default MainPage;
