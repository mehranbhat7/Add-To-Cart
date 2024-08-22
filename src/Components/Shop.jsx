import React from "react";
import list from "../api";
import Card from "./Card";

const Shop = ({ handleclick }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {list.map((ele) => {
          return <Card items={ele} key={ele.id} handleclick={handleclick} />;
        })}
      </div>
    </>
  );
};

export default Shop;
