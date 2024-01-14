import React from 'react';
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses';
import Balance from './components/Balance/Balance';
import { Filter } from './components/UI/FilterBars';

const expensesArr_App = [
  {
    id: 'e1',
    category: 'Home',
    item: "Paint",
    amount: 3000,
    date: new Date(2024, 7, 14),
    location: "Lucknow"
  },
  {
    id: 'e2',
    category: 'Food',
    item: "Biscuit",
    amount: 500,
    date: new Date(2024, 3, 14),
    location: "Lucknow"
  },
  {
    id: 'e3',
    category: 'Clothing',
    item: "Shirt",
    amount: 4000,
    date: new Date(2025, 8, 14),
    location: "Lucknow"
  }
];
export default function App() {
  return (
    <>
      <div>
        <Balance />
      </div>
      <NewExpense />
      <Expenses expensesArr_Exp={expensesArr_App} />
    </>
  );
}