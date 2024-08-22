import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";

function App() {
  const [cart, setcart] = useState([]);
  function handleclick(items) {
    console.log(items);
  }
  return (
    <div>
      <Navbar size={cart.length} />
      <Shop handleclick={handleclick} />
    </div>
  );
}

export default App;
