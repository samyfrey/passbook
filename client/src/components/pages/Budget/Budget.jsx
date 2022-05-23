import React from 'react'
import { Navigate } from 'react-router-dom'

// import { postBudget } from '../../../api/budget'
import { BudgetTable } from '../../Table/BudgetTable'

const Budget = ({ budgets }) => {
  if (!budgets) {
    return (
      <Navigate to="/" />
    )
  }

  return (
    <div className='screen'>
      <div className="screen-container">
        <div className="table-box">
          {/* <div>
            <h1>Add Revenue Budget</h1>
            <form className="fill-form"onSubmit={handleSubmit} >
              <input
                placeholder="type"
                name="revenue"
                type="text"
                value={type}
                onChange={event => setType(event.target.value)}
              />
              <input
                placeholder="amount"
                name="revenue"
                type="text"
                value={amount}
                onChange={event => setAmount(event.target.value)}
              />

              <button type="submit">create</button>
            </form>
          </div> */}
          <div className="title">Budget List </div>
          <BudgetTable budgets={budgets}/>
        </div>
      </div>
    </div>

  )
}

export default Budget
