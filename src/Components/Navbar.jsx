import React from "react";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div>
        <div>MY CART</div>
        <div>
          <IoMdCart />
          <p>0</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
