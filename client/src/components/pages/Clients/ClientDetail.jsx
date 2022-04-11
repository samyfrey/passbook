import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { showClient } from '../../../api/clients'
import './Client.scss'
import { Spinner } from 'react-bootstrap'
import LoanTable from '../../Table/LoanTable'

const ClientDetail = () => {
  const [borrower, setBorrower] = useState(null)
  const { borrowerId } = useParams()

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const res = await showClient(borrowerId)
        setBorrower(res.data.client)
      } catch (error) {
        console.log(error)
      }
    }
    fetchClient()
  }, [])
  console.log('borrower state is', borrower)

  if (!borrower) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else {
    const totalAmount = borrower.loans.reduce((total, loan) => {
      return total + loan.amount
    }, 0)
    return (
      <>
        <p>{borrower.name}</p>
        <p>Industry: {borrower.industry}</p>
        <p>Total loans: {totalAmount}</p>
        <LoanTable key={borrower._id} loans={borrower.loans}/>

      </>

    )
  }
}

export default ClientDetail
