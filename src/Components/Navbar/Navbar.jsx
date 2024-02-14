import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-logo">Mehran-EV</div>
        <ul className="nav-menu">
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Explore</li>
          <li className="nav-contact">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
