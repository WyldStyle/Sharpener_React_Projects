import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({props}) => {
  console.log('expenseItem', props);
  // function clickHandler() {}
  const [category, setCategory] = useState(props.category);
  const [delButton, delExp] = useState(props)
  const [amount, incAmt] = useState(props.amount);


  const clickHandler = () => {
    setCategory('Updated!');
  };
  const delExpense = (idx) => {
    // expense = expense.splice(idx, 1);
  }
  // function adding100() {
  //   incAmt(amount + 100);
  // }

  return (
    <Card className='expense-item'>
      <div className='expense-item__description'>
        <ExpenseDate date={props.date} />
        <h3 className='expense-item__description location'>{props.location}</h3>
      </div>
      
      <div className='expense-item__description category'>
        <h2>{category}</h2>
        <h3>{props.item}</h3>
      </div>
      <div className='expense-item__description'>
        <div className='expense-item__amount'>Rs{amount}</div>
      </div>
      <div className='divButton'>

        <button className='button-edit'>Edit</button>
        <button onClick={delExpense} className='button-delete'>Delete</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
// imported in ExpenseList
