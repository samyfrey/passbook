import './Loan.scss'

import React, { useEffect, useState } from 'react'
import { indexLoans } from '../../../api/loans'
import { Spinner } from 'react-bootstrap'

const LoansOverview = ({ clients }) => {
  const [loans, setLoans] = useState(null)

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const res = await indexLoans()
        setLoans(res.data.loans)
        await console.log('loans variable is', loans)
        // await console.log('loan res is:', res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchLoans()
  }, [])

  if (!loans) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else {
    function loanTotal (array) {
      let sum = 0
      for (let i = 0; i < array.length; i++) {
        const selectBorrower = array[i].loans
        for (let j = 0; j < selectBorrower.length; j++) {
          const result = selectBorrower[j].amount
          sum += result
        }
      }
      return sum
    }

    return (
      <div>
        {/* <p>LoansOverview</p>
      {loans.loans.map(loan => (
        <ul key={loan._id}>
          <li>{loan.description}</li>
        </ul>
      ))} */}
        <p>Total loans: {loanTotal(clients)}</p>

        <div>Loan table {clients.map(client => (
          <ul key={client._id}>
            {/* <li>{client.name}</li> */}
            {client.loans.map(loan => (
              <ul key={loan._id}>
                <li>{loan.amount}</li>
              </ul>
            ))}
          </ul>
        ))}</div>      </div>
    )
  }
}
export default LoansOverview
