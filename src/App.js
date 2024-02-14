import React, { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Background/Hero/Hero";

function App() {
  let heroDAta = [
    { text1: "Welcome To", text2: "Mehran's Website" },
    { text1: "Indulge", text2: "Your Passion" },
    { text1: "Give n to", text2: "Your Passion" },
  ];
  const [heroCount, setheroCount] = useState(0);
  const [playStatus, setplayStatus] = useState(false);
  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setplayStatus={setplayStatus}
        heroDAta={heroDAta[heroCount]}
        heroCount={heroCount}
        setheroCount={setheroCount}
        playStatus={playStatus}
      />
    </>
  );
}

export default App;
