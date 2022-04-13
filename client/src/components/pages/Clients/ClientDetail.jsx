import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { showClient } from '../../../api/clients'
import './Client.scss'
import { Spinner } from 'react-bootstrap'
import LoanTable from '../../Table/LoanTable'
import { ChartBar } from '../../Table/ChartBar'
import ClientNewsFeed from '../../News/ClientNewsFeed'
// import { NewsTable } from '../../Table/NewsTable'
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

    const loanData = [{
      name: 'Total Credit Limits',
      YTD: totalAmount,
      Budget: borrower.creditLimit

    }]

    return (
      <>
        <p>{borrower.name}</p>
        <img src={`https://logo.clearbit.com/${borrower.name}.com`} alt="" className="image" />
        <p>Industry: {borrower.industry}</p>
        <p>Total outstanding loans: {totalAmount}</p>
        <p>Max credit limit: {borrower.creditLimit}</p>
        <LoanTable loans={borrower.loans} />
        <ChartBar data={loanData}/>
        <div className="listContainer">
          <div className="title">Latest News</div>
          <ClientNewsFeed borrower={borrower} />
        </div>
      </>

    )
  }
}

export default ClientDetail
