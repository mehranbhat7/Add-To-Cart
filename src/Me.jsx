import React, { useEffect, useRef, useState } from "react";

const Me = () => {
  const [inp, setinp] = useState("");
  const prev = useRef("");
  useEffect(() => {
    prev.current = inp;
  }, [inp]);
  return (
    <>
      <input type="text" value={inp} onChange={(e) => setinp(e.target.value)} />
      <h1> current = {inp}</h1>
      <h1> prev = {prev.current}</h1>
    </>
  );
};

export default Me;
