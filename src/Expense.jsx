import React, { useState } from "react";

const Expense = () => {
  const [input, setinput] = useState("");
  const [amount, setamount] = useState("");
  const [expense, setexpense] = useState([]);
  function handle() {
    if (!input || !amount) return;
  }
  const newex = {
    id: expense.length + 1,
    title: input,
    amount: amount,
  };
  setexpense([...expense, newex]);

  return (
    <>
      <h1>EXPENSE TRACKER</h1>
      <input type="text" onChange={(e) => setinput(e.target.value)} />
      <input type="number" onChange={(e) => setamount(e.target.value)} />
      <button onClick={handle}>Add expense</button>
      <ul>
        {expense.localeCompare((ele) => {
          return (
            <li key={ele.id}>
              {ele.id} {ele.amount}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Expense;
