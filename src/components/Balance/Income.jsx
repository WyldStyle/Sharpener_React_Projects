import { useState } from "react";
export default function Income() {
  const [income, setIncome] = useState('');
  return (
    <div className="divIncome">INCOME
      <input type="number" placeholder="Enter extra Income" />
      <button className="add-new-Income">Add New Income</button>
    </div>
  )
}