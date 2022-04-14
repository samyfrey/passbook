import React from 'react'
import { BudgetTable } from '../../Table/CreditBudgetTable'

const Budget = ({ revenueBudget, creditBudget, setRevenueBudget, setCreditBudget }) => {
  // const data = [
  //   { 'Credit Limits': creditBudget },
  //   { Revenues: revenueBudget }
  // ]
  console.log('revenuebudget is', revenueBudget)
  return (
    <div>
      <h1>Revenue Budget: {revenueBudget}</h1>
      <h1>Credit Limits Budget: {creditBudget}</h1>
      <BudgetTable revenueBudget={revenueBudget} creditBudget={creditBudget}/>
      {/* <BudgetTable data={data}/> */}
    </div>
  )
}

export default Budget
