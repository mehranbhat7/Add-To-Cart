import React from "react";

const Expense = () => {
  return (
    <>
      <div>
        <div>
          <h1>Expense Tracker</h1>
        </div>
        <div>
          <input type="text" required />
          <input type="number" required />
          <button>Add expense</button>
        </div>
        <div>
          <p>BOOK</p>
          <p>total</p>
        </div>
      </div>
    </>
  );
};

export default Expense;
