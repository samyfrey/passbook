import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createLoan } from '../../../api/loans'
import { CreateForm } from '../Clients/CreateForm'

const LoanCreate = ({ user, clients }) => {
  const [loan, setLoan] = useState(
    { description: '', amount: '', month: '', borrowerId: '' }
  )
  // const [borrowerId, setBorrowerId] = useState('')
  const [isNewLoan, setIsNewLoan] = useState(false)

  const handleChange = (event) => {
    setLoan({ ...loan, [event.target.name]: event.target.value })
  }

  const handleCreate = async event => {
    event.preventDefault()
    try {
      console.log('user is', user)
      await createLoan(user, loan)
      setIsNewLoan(true)
    } catch (error) {
      console.log(error)
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
    }

  ]
  console.log('loan is', loan)

  return (
    <div>LoanCreate
      <CreateForm user={user} data={loanFormData} handleChange={handleChange} handleCreate={handleCreate} setLoan={setLoan} loan={loan} clients={clients}/>
    </div>
  )
}

export default LoanCreate
