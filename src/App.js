import React from "react";

import Image from "./components/Image";
import TextBody from "./components/TextBody";
import SocialNav from "./components/SocialNav";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <Image />
      <TextBody />
      <SocialNav />
    </div>
  );
}

export default App;
