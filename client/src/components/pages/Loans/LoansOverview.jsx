
import React, { useEffect, useState } from 'react'
import './loan.scss'
import { Spinner } from 'react-bootstrap'
import LoansTable from './LoansTable'
import { indexClients } from '../../../api/clients'
import { Link } from 'react-router-dom'
import { ChartBar } from '../../Table/ChartBar'

const LoansOverview = ({ clients, user, render, creditBudget, setRender, msgAlert, selectClient, setSelectClient }) => {
  const [loans, setLoans] = useState(null)

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const res = await indexClients()
        setLoans(res.data.clients)
      } catch (error) {
        msgAlert({
          heading: 'Failed!',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchLoans()
  }, [render])

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
      Budget: creditBudget

    }]

    return (
      <div className='overview'>
        <div className="overview-container">
          <div className="titleBox">
            <div className="overview-title">
              {/* <div className="title-box"> */}
              {/*
                <h1><SortIcon /> Loans</h1>
                <Link to='/loans/create'>
                  <button>New loan</button>
                </Link> */}

              {/* </div> */}
            </div>
          </div>
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

            <LoansTable clients={clients} user={user} setRender={setRender} msgAlert={msgAlert} selectClient={selectClient} setSelectClient={setSelectClient}/>
          </div>
        </div>
      </div>
    )
  }
}
export default LoansOverview
