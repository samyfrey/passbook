import React from 'react'

import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import ListTable from '../../Table/ListTable'
import './Client.scss'
// import Chart from '../../Chart/Chart'

const ClientsOverview = ({ clients, setChartData }) => {
  if (!clients) {
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

    return (
      <div className='container'>
        <h1>Clients List</h1>
        <Link to='/clients/create'>
          <button>Add a client</button>
        </Link>
        {/* {clients.map(client => (
        <ul key={client._id}>
          <Link to={`/clients/${client._id}`}>{client.name}</Link>
        </ul>
      ))} */}
        <p>Total loans: {loanTotal(clients)}</p>
        {/* <p>Cumulated {cumulate(clients)}</p> */}
        <p>Total revenue is: {revenueTotal(clients)}</p>
        <div>Loan table {clients.map(client => (
          <ul key={client._id}>
            {/* <li>{client.name}</li> */}
            {client.loans.map(loan => (
              <ul key={loan._id}>
                <li>{loan.amount}</li>
              </ul>
            ))}
          </ul>
        ))}</div>
        <ListTable rows={clients} />
        {/* <Chart title="Last 6 Months (Revenue)" aspect={3 / 1} data={chartData}/> */}
      </div>
    )
  }
}

export default ClientsOverview
