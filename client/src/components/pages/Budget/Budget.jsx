import React from 'react'
import { BudgetTable } from '../../Table/BudgetTable'

const Budget = ({ revenueBudget, creditBudget, budgets }) => {
  // const data = [
  //   { 'Credit Limits': creditBudget },
  //   { Revenues: revenueBudget }
  // ]
  console.log('revenuebudget is', revenueBudget)
  return (
    <div className='overview'>
      <div className="overview-container">
        <div className="overview-table">
          <div className="title">Transactions List </div>
          <BudgetTable budgets={budgets} revenueBudget={revenueBudget} creditBudget={creditBudget}/>
        </div>
      </div>
    </div>

  )
}

export default Budget
