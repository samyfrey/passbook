import React from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import ListTable from '../../Table/ListTable'
import './client.scss'
import { ChartBar } from '../../Table/ChartBar'
import FeatureCard from '../../Features/FeatureCard'
import { creditLimitsExtractor } from '../../../dataManipulation'

const ClientsOverview = ({ clients, user, revenueBudget, setRender, msgAlert }) => {
  if (!clients) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else {
    function revenueTotal (array) {
      let sum = 0
      for (let i = 0; i < array.length; i++) {
        const selectBorrower = array[i].loans
        for (let j = 0; j < selectBorrower.length; j++) {
          const result = selectBorrower[j].revenue
          sum += result
        }
      }
      return sum
    }

    console.log('clientsis', clients)
    const largestCreditLimit = Math.max(...creditLimitsExtractor(clients))
    console.log('largest limit is', largestCreditLimit)
    const numberClients = creditLimitsExtractor(clients).length

    const revenueData = [{
      YTD: revenueTotal(clients),
      Budget: revenueBudget,
      largestCreditLimit: largestCreditLimit,
      numberClients: numberClients

    }]

    return (
      <div className='screen'>
        <div className="screen-container">
          <div className="screen-top">
            <div className="header-box container-box ">
              <Link to='/clients/create'>
                <button>New client</button>
              </Link>
              <p>Total revenue is: {revenueTotal(clients)}</p>
            </div>
            <div className="chart container-box">
              <div className="title">YTD Revenue vs Budget ($MM)</div>
              {revenueData && <ChartBar data={revenueData} />}

            </div>
          </div>

          <div className="widgets">
            <FeatureCard title='Total Revenues' data={revenueData[0].YTD} isMoney={true}/>
            <FeatureCard title='Largest Credit Limit' data={revenueData[0].largestCreditLimit} isMoney={true}/>
            <FeatureCard title='Number of Clients' data={revenueData[0].numberClients} isMoney={false}/>
          </div>
          <div className="table-box">
            <div className="title">Clients List </div>
            <ListTable user={user} clients={clients} setRender={setRender} msgAlert={msgAlert}/>
          </div>
        </div>
      </div>

    )
  }
}

export default ClientsOverview
