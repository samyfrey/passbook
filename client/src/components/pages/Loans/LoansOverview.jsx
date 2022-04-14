
import React, { useEffect, useState } from 'react'
// import { indexLoans } from '../../../api/loans'
import './Loan.scss'
import { Spinner } from 'react-bootstrap'
import LoansTable from './LoansTable'
import { indexClients } from '../../../api/clients'
import { Link } from 'react-router-dom'
import { ChartBar } from '../../Table/ChartBar'

const LoansOverview = ({ clients, user, render, setRender }) => {
  const [loans, setLoans] = useState(null)

  useEffect(() => {
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
  }, [render])
  console.log('loans variable is', loans)
  console.log('render is', render)

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
    const loanData = [{
      YTD: loanTotal(clients),
      Budget: 1500

    }]

    return (
      <div className='overview'>
        <div className="overview-container">
          <div className="overview-top">
            <div className="header-box">
              <p>Total loans: {loanTotal(clients)}</p>
              <Link to='/loans/create'>
                <button>New loan</button>
              </Link>

            </div>
            <div className="chart">
              <div className="title">Current Limits vs Budget ($MM)</div>
              {loanData && <ChartBar data={loanData} />}

            </div>
          </div>
          <div className="overview-table">
            <div className="title">Transactions List </div>
            <LoansTable clients={clients}/>
          </div>
        </div>
      </div>
    )
  }
}
export default LoansOverview
