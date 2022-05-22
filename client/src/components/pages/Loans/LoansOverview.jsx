
import React, { useEffect, useState } from 'react'
import './loans.scss'
import { Spinner } from 'react-bootstrap'
import LoansTable from './LoansTable'
import { indexClients } from '../../../api/clients'
import { Link } from 'react-router-dom'
import { ChartBar } from '../../Table/ChartBar'
import FeatureCard from '../../Features/FeatureCard'
import { loanAmounts } from '../../../dataManipulation'

const LoansOverview = ({ clients, user, render, creditBudget, setRender, msgAlert }) => {
  const [loans, setLoans] = useState(null)

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        setRender(false)
        const res = await indexClients()
        setLoans(res.data.clients)
        setRender(true)
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

    const topLoan = Math.max(...loanAmounts(clients))
    const numberLoans = loanAmounts(clients).length

    const loanData = [{
      YTD: loanTotal(clients),
      Budget: creditBudget,
      topLoan: topLoan,
      numberLoans: numberLoans

    }]

    return (
      <div className='screen'>
        <div className="screen-container">
          <div className="screen-top">
            <div className="header-box container-box">

              <div className="title-header">

                <h1>Loans</h1>
                <div className="add-btn">
                  <Link to='/loans/create'>
                    <button>New loan</button>
                  </Link>

                </div>

              </div>

              <div className="widgets">
                <FeatureCard title='Total Loans Outstanding' data={loanData[0].YTD} isMoney={true}/>
                <FeatureCard title='Largest Loan' data={loanData[0].topLoan} isMoney={true}/>
                <FeatureCard title='Loans Granted' data={loanData[0].numberLoans} isMoney={false}/>
              </div>
            </div>

            <div className="chart">
              <div className="title">Current Limits vs Budget ($MM)</div>
              {loanData && <ChartBar data={loanData} />}

            </div>
          </div>
          <div className="table-box">
            <div className="title">Transactions List </div>

            <LoansTable clients={clients} user={user} setRender={setRender} msgAlert={msgAlert}/>
          </div>
        </div>
      </div>
    )
  }
}
export default LoansOverview
