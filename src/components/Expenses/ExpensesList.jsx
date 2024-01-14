import React from 'react';

import ExpenseItem from './ExpenseItem.jsx';
import './ExpensesList.css';

const ExpensesList = ({ filteredExpensesArr_expList }) => {
  console.log('expList', filteredExpensesArr_expList);
  if (filteredExpensesArr_expList.length === 0) {
    return <h2 className='expenses-list__fallback'>YaY!!! No Expenses. You Saved all yr Money</h2>
  }
  return (
    <ul className='expenses-list'>
      {filteredExpensesArr_expList.map((eachExp) =>
        <ExpenseItem props={eachExp} />)}
    </ul>
  )
}
export default ExpensesList;