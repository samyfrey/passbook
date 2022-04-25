import React, { useEffect, useState } from 'react'

import { Navigate, useParams } from 'react-router-dom'
import { editBudget, showBudget } from '../../../api/budget'

const BudgetEdit = ({ render, setRender }) => {
  const { budgetId } = useParams()
  const [selectBudget, setSelectBudget] = useState('')
  const [updatedAmount, setUpdatedAmount] = useState('')
  // const [updated, setUpdated] = useState(false)
  console.log('budget id is', budgetId)
  useEffect(() => {
    const fetchData = async () => {
      setRender(false)
      try {
        const res = await showBudget(budgetId)
        setSelectBudget(res.data.budget)
        console.log('res is', res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await editBudget(budgetId, updatedAmount)
      setRender(true)
        msgAlert({
        heading: 'Done!',
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed!',
        message: error.message,
        variant: 'danger'
      })
  }

  if (render) {
    return <Navigate to={'/budget'} />
  }
  //   const amount = selectBudget.amount
  return (
    <div className='overview'>
      <div className="overview-container create">
        <div className="overview-table">
          <div className="title">Update {selectBudget.type}</div>

          <form className='create-client-form' onSubmit={handleSubmit} >

            <input type='text' placeholder='Type new amount' name='amount' value={updatedAmount} onChange={event => setUpdatedAmount(event.target.value)}/>
            <button className="button" type="submit">Update</button>

          </form>
        </div>
        {/* <div>
          <div>Hello</div>
        </div> */}
      </div>
    </div>
  )
}

export default BudgetEdit
