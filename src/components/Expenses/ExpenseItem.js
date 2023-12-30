import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { ReturnExpenseArr } from '../../App';

const ExpenseItem = (props) => {
  console.log('expenseItem', props);
  // function clickHandler() {}
  const [category, setCategory] = useState(props.category);
  const [delButton, delExp] = useState(props)

  const clickHandler = () => {
    setCategory('Updated!');
  };
  const delExpense = (idx) => {
    const expense = ReturnExpenseArr();
    expense = expense.splice(idx,1);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.location}</h2>
        <h2>{category}</h2>
        <h3>{props.item}</h3>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={delExpense}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
