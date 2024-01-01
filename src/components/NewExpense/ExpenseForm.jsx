import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredItem, setEnteredItem] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredLocation, setEnteredLocation] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const itemChangeHandler = (event) => {
    setEnteredItem(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      category: enteredCategory,
      item: enteredItem,
      amount: enteredAmount,
      location: enteredLocation,
      date: new Date(enteredDate)
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>EXPENSE TRACKER</h1>
      <hr></hr>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Category</label>
          <input type='text' onChange={categoryChangeHandler} />
          <label>Item</label>
          <input type='text' onChange={itemChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
          <label>Location</label>
          <input type='text' onChange={locationChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button className='button-addExpense'type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
