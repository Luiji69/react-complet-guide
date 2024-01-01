import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [entredTitle, setEntredTitle] = useState('');
  const [entredAmount, setEntredAmount] = useState('');
  const [entredDate, setEntredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEntredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEntredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEntredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: entredTitle,
      amount: entredAmount,
      date: new Date(entredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEntredTitle('');
    setEntredAmount('');
    setEntredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={entredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={entredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={entredDate}
            min="2024-01-01"
            max="2027-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
