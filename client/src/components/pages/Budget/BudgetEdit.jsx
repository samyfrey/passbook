import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { editBudget, showBudget } from '../../../api/budget'

const BudgetEdit = ({ render, user, setRender, msgAlert }) => {
  const { budgetId } = useParams()
  const [selectBudget, setSelectBudget] = useState('')
  const [updatedAmount, setUpdatedAmount] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setRender(false)
      try {
        const res = await showBudget(budgetId)
        setSelectBudget(res.data.budget)
      } catch (error) {
        msgAlert({
          heading: 'Failed!',
          message: 'Please try again',
          variant: 'danger'
        })
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      setRender(false)
      await editBudget(budgetId, updatedAmount)
      setRender(true)
      msgAlert({
        heading: 'Done!',
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed!',
        message: 'Please try again',
        variant: 'danger'
      })
    }
  }
  if (render) {
    return <Navigate to={'/budget'} />
  }
  return (
    <div className='screen'>
      <div className="screen-container create">
        <div className="table-box">
          {!user && <Link to='/account/register'>Sign in or Register to edit a budget</Link>}
          <h1>Update {selectBudget.type}</h1>

          <form className='create-client-form' onSubmit={handleSubmit} >
            <div className="create-client-item">
              <input type='text' placeholder='Type new amount' name='amount' value={updatedAmount} onChange={event => setUpdatedAmount(event.target.value)}/>
              <button className="button" type="submit">Update</button>
            </div>
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
