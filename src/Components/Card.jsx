import React from "react";

const Card = ({ items, handleclick }) => {
  const { title, img, author, price } = items;
  return (
    <>
      <div className="p-4 border-2 border-gray-300 rounded-md shadow-lg flex flex-col justify-between h-full hover:bg-gray-300">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-contain rounded-md mb-4"
        />
        <div className="flex flex-col flex-grow">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-sm font-medium text-gray-600 mb-2">{author}</p>
          <p className="text-xl font-bold text-red-500 mb-4">${price}</p>
        </div>
        <button
          onClick={() => handleclick(items)}
          className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
