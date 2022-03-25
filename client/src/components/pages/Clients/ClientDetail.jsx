import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { showClient } from '../../../api/clients'
import '../../styles/Client.scss'
import { Spinner } from 'react-bootstrap'

const ClientDetail = () => {
  const [borrower, setBorrower] = useState(null)
  const { borrowerId } = useParams()

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const res = await showClient(borrowerId)
        setBorrower(res.data.client)
        console.log('borrower is', borrower)
      } catch (error) {
        console.log(error)
      }
    }
    fetchClient()
  }, [])

  if (!borrower) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }

  const totalAmount = borrower.loans.reduce((total, loan) => {
    return total + loan.amount
  }, 0)
  return (
    <>
      <p>{borrower.name}</p>
      <p>{borrower.loans.map(loan => (
        <li key={loan._id}>{loan.description}</li>
      ))}</p>
      <p>{totalAmount}</p>
    </>

  )
}

export default ClientDetail
