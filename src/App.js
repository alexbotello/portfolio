import React, { useState, useEffect } from "react";

import MainPage from "./components/Main";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  });
  return (
    <div>
      {isLoading ? null : (
        <div>
          <MainPage />
          <Projects />
          <ContactMe />
        </div>
      )}
    </div>
  );
}

export default App;
