import React, { useState } from 'react'
import './Loan.scss'

import { Navigate } from 'react-router-dom'
import { createLoan } from '../../../api/loans'
import { LoanCreateForm } from '../Loans/LoanCreateForm'

const LoanCreate = ({ user, clients, setRender, msgAlert }) => {
  const [loan, setLoan] = useState(
    { description: '', amount: '', month: '', borrowerId: '', revenue: '' }
  )
  const [isNewLoan, setIsNewLoan] = useState(false)

  const handleChange = (event) => {
    setLoan({ ...loan, [event.target.name]: event.target.value })
  }

  const handleCreate = async event => {
    event.preventDefault()
    try {
      console.log('user is', user)
      setIsNewLoan(false)
      await createLoan(user, loan)
      setRender(true)
      setIsNewLoan(true)
      msgAlert({
        heading: 'Loan created',
        variant: 'success'
      })
    } catch (error) {
      console.log(error)
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
      placeholder: 'Loan Description'

    },
    {
      id: 2,
      property: 'amount',
      value: `${loan.amount}`,
      placeholder: 'Loan Amount'
    },
    {
      id: 3,
      property: 'revenue',
      value: `${loan.revenue}`,
      placeholder: 'Revenue ($MM)'
    }

  ]
  console.log('loan is', loan)

  return (
    <div className='create'>
      <div className="form">
        <div className="title">Add a New Loan </div>
        <LoanCreateForm user={user} data={loanFormData} handleChange={handleChange} handleCreate={handleCreate} setLoan={setLoan} loan={loan} clients={clients}/>
      </div>
      <div className="snapshot">
        <p>Loan:{loan.description}</p>
      </div>
    </div>
  )
}

export default LoanCreate
