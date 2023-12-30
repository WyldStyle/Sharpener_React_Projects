import React from 'react';
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses';

export default function App(){

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <>
    <NewExpense/>
    <SharpenerExp/>
    </>
  );
}


function ReturnExpenseArr(){
  const expenses = [
    {
      id: 'e1',
      category: 'Home',
      item: "Paint",
      amount: 3000,
      date: new Date(2020, 7, 14),
      location: "Lucknow"
    },
    {
      id: 'e2',
      category: 'Food',
      item: "Biscuit",
      amount: 50,
      date: new Date(2020, 7, 14),
      location: "Lucknow"
    },
    {
      id: 'e3',
      category: 'Clothing',
      item: "Shirt",
      amount: 400,
      date: new Date(2020, 7, 14),
      location: "Lucknow"
    }
  ];
  return expenses;
}
function SharpenerExp() {
  const expenses = ReturnExpenseArr();
  console.log(expenses);
  return <LoopOnExpensesArr expenses={expenses}/>

}
function LoopOnExpensesArr({expenses}) {
  const expenseComponentArr = [];
  expenses.forEach(element => {
    expenseComponentArr.push(<Expenses props={element}/>)
  });
  // return <expenseComponentArr/>
  return expenseComponentArr
  // both are same
}

export {ReturnExpenseArr}