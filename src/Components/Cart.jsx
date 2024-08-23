import React, { useEffect, useState } from "react";

const Cart = ({ cart, setcart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleRemove = (id) => {
    setcart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Total Price: ${totalPrice.toFixed(2)}
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cart.map((ele) => {
          return (
            <li
              key={ele.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={ele.img}
                alt={ele.title}
                className="w-32 h-32 object-cover rounded-md mb-4"
              />

              <p className="text-lg font-semibold mb-2">{ele.title}</p>

              <p className="text-gray-700 mb-4">${ele.price.toFixed(2)}</p>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                onClick={() => handleRemove(ele.id)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
