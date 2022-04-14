import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createLoan } from '../../../api/loans'
import { CreateForm } from '../Clients/CreateForm'

const LoanCreate = ({ user, clients }) => {
  const [loan, setLoan] = useState(
    { description: '', amount: '', month: '', borrowerId: '' }
  )
  const [borrowerId, setBorrowerId] = useState('')
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
    },
    {
      id: 3,
      property: 'month',
      value: `${loan.month}`,
      //   needs to be a dropdown to chose months in format Month not month
      placeholder: 'Closing Month'
    },
    {
      id: 4,
      property: 'borrowerId',
      value: `${borrowerId}`,
      //   needs to be a dropdown to borrower from list and assign id automatic
      placeholder: 'Input borrower Id'
    }

    // {
    //   id: 4,
    //   property: 'borrowerId',
    //   value: `${loan.borrowerId}`,
    //   //   needs to be a dropdown to borrower from list and assign id automatic
    //   placeholder: 'Input borrower Id'
    // }
    // {
    //   id: 1,
    //   property: 'name',
    //   value: `${client.name}`,
    //   placeholder: 'Company Name'

    // },
    // {
    //   id: 2,
    //   property: 'industry',
    //   value: `${client.industry}`,
    //   placeholder: 'Industry'
    // }

  ]
  console.log('borrower id is', borrowerId)
  console.log('borrower id typeof is', typeof borrowerId)
  console.log('loan state is', loan)

  return (
    <div>LoanCreate
      <CreateForm user={user} data={loanFormData} handleChange={handleChange} handleCreate={handleCreate} setBorrowerId={setBorrowerId} setLoan={setLoan} loan={loan} clients={clients}/>
    </div>
  )
}

export default LoanCreate
