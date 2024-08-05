// src/AddTransactionForm.js
import React, { useState } from 'react';

function AddTransactionForm() {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      date,
      description,
      category,
      amount,
    };
    fetch('http://localhost:3001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm;