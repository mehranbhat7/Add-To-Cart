import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";

function App() {
  const [cart, setcart] = useState([]);
  const [warning, setwarning] = useState(false);
  function handleclick(items) {
    let ispresent = false;
    cart.forEach((prod) => {
      if (prod.id === items.id) ispresent = true;
    });
    if (ispresent) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false);
      }, 3000);
      return;
    }
    setcart([...cart, items]);
  }
  return (
    <div>
      <Navbar size={cart.length} />
      <Shop handleclick={handleclick} />
      {warning && (
        <div className="fixed bottom-0 left-0 right-0 bg-red-500 p-4 text-center text-white">
          Item already in cart!
        </div>
      )}
    </div>
  );
}

export default App;
