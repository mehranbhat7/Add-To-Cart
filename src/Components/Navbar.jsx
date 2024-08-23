import React from "react";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const Navbar = ({ size }) => {
  return (
    <>
      <div className="bg-red-300 h-24 flex p-8 justify-between">
        <div className="text-4xl font-bold font-serif text-white underline cursor-pointer">
          MY CART
        </div>
        <div className="flex">
          <Link to="/cart">
            {" "}
            <h1 className="text-5xl text-white cursor-pointer">
              {" "}
              <IoMdCart />
            </h1>
          </Link>
          <p className="font-semibold">{size}</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
