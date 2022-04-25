import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { showClient } from '../../../api/clients'
import './Client.scss'
import { Spinner } from 'react-bootstrap'
import LoanTable from '../Loans/LoanTable'
import { ChartBar } from '../../Table/ChartBar'
import ClientNewsFeed from '../../News/ClientNewsFeed'
import ClientDelete from './ClientDelete'
// import { NewsTable } from '../../Table/NewsTable'
const ClientDetail = ({ user, msgAlert, render, setRender }) => {
  const [borrower, setBorrower] = useState(null)
  const { borrowerId } = useParams()

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const res = await showClient(borrowerId)
        setBorrower(res.data.client)
        setRender(false)
        console.log('res from client detail is', res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchClient()
  }, [render])

  console.log('borrower state is', borrower)

  if (!borrower) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
      // <Navigate to='/'/>
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
        <div className='overview'>
          <div className="overview-container">
            <div className="overview-top">
              <div className="header-box">

                <div className="companyHeader">

                  <img src={`https://logo.clearbit.com/${borrower.name}.com`} alt="" className="image" />
                  <h1>{borrower.name}</h1>
                  <div className="actions">

                    <div className="cellAction">
                      <Link to={`/clients/${borrower._id}/edit`}>
                        <div className="viewButton">Edit</div>
                      </Link>
                      <ClientDelete user={user} client={borrower} msgAlert={msgAlert} setRender={setRender}/>
                    </div>
                  </div>

                  <div className="add-loan">
                    <Link to='/loans/create'>
                      <button>New loan</button>
                    </Link>
                  </div>
                </div>

                <div className="companyMetrics">

                  <ul>Industry: {borrower.industry}</ul>
                  <ul>Total loans outstanding: <span>$</span>{totalAmount}<span>MM</span></ul>
                  <ul>Credit Authorization: <span>$</span>{borrower.creditLimit}<span>MM</span></ul>

                </div>

                <div className="title">Transactions List</div>
                <LoanTable loans={borrower.loans} />
              </div>

              <div className="chart">
                <div className="title">YTD Revenue vs Budget ($MM)</div>
                <ChartBar data={loanData}/>
              </div>
            </div>
            {/* <div className="overview-table">

            </div> */}

            <div className="listContainer">
              <div className="title">Latest News</div>
              <ClientNewsFeed borrower={borrower} />
            </div>
          </div>
        </div>

      </>

    )
  }
}

export default ClientDetail
