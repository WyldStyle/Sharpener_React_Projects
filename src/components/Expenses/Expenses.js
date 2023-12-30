import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ props }) => {
  console.log('expenses.js', props);
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.date}
        location={props.location}
        category={props.category}
        item={props.item}
        amount={props.amount}
      />
    </Card>
  );
}

export default Expenses;
