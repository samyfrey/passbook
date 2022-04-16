import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { showLoan } from '../../../api/loans'

const ShowLoan = ({ selectClient, user }) => {
  const { loanId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const borrowerId = selectClient._id
        console.log('loan id is', loanId)
        console.log('user is', user)
        console.log('borrower id is', borrowerId)
        const res = await showLoan(user, loanId, borrowerId)
        // setLoanToUpdate(res.data.loan)
        console.log('res is', res)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])
  return (
    <div>ShowLoan

    </div>
  )
}

export default ShowLoan
