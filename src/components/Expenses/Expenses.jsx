import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'

// const Expenses = ({ props }) => {
//   console.log('expenses.js', props);
//   return (
//     <Card className="expenses">
//       <ExpenseItem
//         date={props.date}
//         location={props.location}
//         category={props.category}
//         item={props.item}
//         amount={props.amount}
//       />
//     </Card>
//   );
// }

const Expenses = ({ expensesArr_Exp }) => {
  // console.log(expensesArr_Exp);
  const [filteredYr, setFilteredYr] = useState('All');
  const filteredYrisChanged = (selectedYr) => {
    setFilteredYr(selectedYr);
  }
  let filteredExpensesArr_exp = expensesArr_Exp;
  if (filteredYr !== 'All') {
    filteredExpensesArr_exp = expensesArr_Exp.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYr;
    })
  }
  console.log(filteredYr, filteredExpensesArr_exp);
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYr={filteredYr}
        ifFilteredYrisChanged={filteredYrisChanged}
      />
      <ExpensesChart filteredExpensesArr_expChart={filteredExpensesArr_exp} />
      <ExpensesList filteredExpensesArr_expList={filteredExpensesArr_exp} />
    </Card>
  )
}
export default Expenses;
