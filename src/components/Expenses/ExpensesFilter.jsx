import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({ selectedYr,ifFilteredYrisChanged}) => {
  const yrChange = (e) => {
    // console.log('expFilter',e);
    ifFilteredYrisChanged(e.target.value)
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="">Filter By Year</label>
        <select name="" id="" value={selectedYr} onChange={yrChange}>
          <option value="All">All</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>
      </div>
    </div>
  )
}
export default ExpensesFilter;