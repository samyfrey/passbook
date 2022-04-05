import './Loan.scss'

import React, { useEffect, useState } from 'react'
import { indexLoans } from '../../../api/loans'
import { Spinner } from 'react-bootstrap'

const LoansOverview = () => {
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
  }

  return (
    <div>
      {/* <p>LoansOverview</p>
      {loans.loans.map(loan => (
        <ul key={loan._id}>
          <li>{loan.description}</li>
        </ul>
      ))} */}
      <>Loan component is on each client</>
    </div>
  )
}

export default LoansOverview
