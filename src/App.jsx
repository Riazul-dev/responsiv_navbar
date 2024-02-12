import React, { useState } from "react";
import HeroSection from "./COMPONENTS/HeroSection";
import Header from "./COMPONENTS/Header/Header";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}

export default App;
