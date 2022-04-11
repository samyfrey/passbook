import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createLoan } from '../../../api/loans'
import { CreateForm } from '../Clients/CreateForm'

const LoanCreate = ({ user }) => {
  const [loan, setLoan] = useState(
    { description: '', amount: '', month: '', borrowerId: '' }
  )
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
    return <Navigate to={'/clients'} />
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
      value: `${loan.borrowerId}`,
      //   needs to be a dropdown to chose months in format Month not month
      placeholder: 'Input borrower Id'
    }
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
  return (
    <div>LoanCreate
      <CreateForm user={user} data={loanFormData} handleChange={handleChange} handleCreate={handleCreate}/>
    </div>
  )
}

export default LoanCreate
