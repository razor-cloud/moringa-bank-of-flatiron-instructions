// src/TransactionsTable.js
import React, { useState, useEffect } from 'react';

function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    return transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Search transactions" />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsTable;