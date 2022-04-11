import './Loan.scss'

import React, { useEffect, useState } from 'react'
// import { indexLoans } from '../../../api/loans'
import { Spinner } from 'react-bootstrap'
import LoansTable from '../../Table/LoansTable'
import { indexClients } from '../../../api/clients'

const LoansOverview = ({ clients }) => {
  const [loans, setLoans] = useState(null)

  useEffect(() => {
    // const fetchLoans = async () => {
    //   try {
    //     const res = await indexLoans()
    //     setLoans(res.data.loans)
    //     await console.log('loans variable is', loans)
    //     // await console.log('loan res is:', res)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // fetchLoans()
    const fetchLoans = async () => {
      try {
        const res = await indexClients()
        console.log('res from indexclients is', res)
        setLoans(res.data.clients)

        // await console.log('loan res is:', res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchLoans()
  }, [])
  console.log('loans variable is', loans)

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
        <LoansTable clients={clients}/>
        {/* <p>LoansOverview</p>
      {loans.loans.map(loan => (
        <ul key={loan._id}>
          <li>{loan.description}</li>
        </ul>
      ))} */}
        <p>Total loans: {loanTotal(clients)}</p>

      </div>
    )
  }
}
export default LoansOverview
