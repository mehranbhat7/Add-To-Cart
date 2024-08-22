import React, { useState } from "react";

const Expense = () => {
  const [inp, setInp] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  function handle() {
    if (!inp || !amount) {
      return;
    }
    const newExpense = {
      id: expenses.length + 1,
      title: inp,
      amount: amount,
    };
    setExpenses([...expenses, newExpense]);
    setInp("");
    setAmount("");
  }

  const deletee = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <div>
          <input
            type="text"
            placeholder="Enter expense title"
            required
            onChange={(e) => setInp(e.target.value)}
            value={inp}
          />
          <input
            type="number"
            placeholder="Enter amount"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
          <button onClick={handle}>Add expense</button>
        </div>
        <div>
          <ul>
            {expenses.map((ele) => (
              <li key={ele.id}>
                {ele.title} - ${ele.amount}
                <button onClick={() => deletee(ele.id)}>DELETE</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Expense;
