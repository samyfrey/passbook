import React from 'react'
import { Navigate } from 'react-router-dom'

// import { postBudget } from '../../../api/budget'
import { BudgetTable } from '../../Table/BudgetTable'

const Budget = ({ user, msgAlert, budgets, revenueBudget, creditBudget }) => {
  if (!budgets) {
    return (
      <Navigate to="/" />
    )
  }
  // const [amount, setAmount] = useState()
  // const [type, setType] = useState()

  // const handleSubmit = async event => {
  //   event.preventDefault()
  //   try {
  //     await postBudget(type, amount, user)
  //     msgAlert({
  //       heading: 'Done!',
  //       variant: 'success'
  //     })
  //   } catch (error) {
  //     msgAlert({
  //       heading: 'Failed!',
  //       message: error.message,
  //       variant: 'danger'
  //     })
  //   }
  // }
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
          <BudgetTable budgets={budgets} revenueBudget={revenueBudget} creditBudget={creditBudget}/>
        </div>
      </div>
    </div>

  )
}

export default Budget
