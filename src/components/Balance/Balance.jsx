import React from "react"
import Income from "./Income"
import TotalExpense from "./TotalExpense"
import './Balance.css'

export default function Balance() {
  return (
    <div className="balance">
      <Income />
      <TotalExpense />
    </div>
  )
}