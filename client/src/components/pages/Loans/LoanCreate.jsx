import React, { useState } from 'react'

import { Link, Navigate } from 'react-router-dom'
import { createLoan } from '../../../api/loans'
import { LoanCreateForm } from '../Loans/LoanCreateForm'

const LoanCreate = ({ user, updateMode, selectClient, clients, setRender, msgAlert }) => {
  const [loan, setLoan] = useState(
    { description: '', amount: '', month: '', borrowerId: '', revenue: '', status: '' }
  )
  if (updateMode) {
    setLoan(selectClient)
  }
  const [isNewLoan, setIsNewLoan] = useState(false)

  const handleChange = (event) => {
    setLoan({ ...loan, [event.target.name]: event.target.value })
  }

  const handleCreate = async event => {
    event.preventDefault()
    try {
      setIsNewLoan(false)
      await createLoan(user, loan)
      setRender(true)
      setIsNewLoan(true)
      msgAlert({
        heading: 'Loan created',
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Operation failed',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (isNewLoan) {
    return <Navigate to={'/loans'} />
  }
  const loanFormData = [
    {
      id: 1,
      property: 'description',
      value: `${loan.description}`,
      placeholder: 'Loan Type'

    },
    {
      id: 2,
      property: 'amount',
      value: `${loan.amount}`,
      placeholder: 'Loan Amount ($MM)'
    },
    {
      id: 3,
      property: 'revenue',
      value: `${loan.revenue}`,
      placeholder: 'Revenue ($MM)'
    }

  ]

  return (
    <div className='screen'>
      <div className="screen-container">
        <div className="table-box">
          {!user && <Link to='/account/register'>Sign in or Register to add a new loan</Link>}
          <h1>New loan</h1>
          <LoanCreateForm user={user} data={loanFormData} handleChange={handleChange} handleCreate={handleCreate} setLoan={setLoan} loan={loan} clients={clients} selectClient={selectClient}/>
        </div>
      </div>
    </div>
  )
}

export default LoanCreate
