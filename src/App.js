import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  function handleClick(items) {
    let isPresent = cart.some((prod) => prod.id === items.id);

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3000);
      return;
    }

    setCart([...cart, items]);
  }

  return (
    <Router>
      <div>
        <Navbar size={cart.length} />
        <Routes>
          <Route path="/" element={<Shop handleclick={handleClick} />} />{" "}
          <Route path="/cart" element={<Cart cart={cart} />} />{" "}
        </Routes>
        {warning && (
          <div className="fixed bottom-0 left-0 right-0 bg-red-500 p-4 text-center text-white">
            Item already in cart!
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
