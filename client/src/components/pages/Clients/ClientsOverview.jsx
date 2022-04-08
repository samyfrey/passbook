import React from 'react'

import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import ListTable from '../../Table/ListTable'
import './Client.scss'
import Chart from '../../Chart/Chart'
import ChartTest from '../../Chart/ChartTest'

const ClientsOverview = ({ clients }) => {
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

    const actualRevData = [
      {
        month: 'January',
        pastYearRev: 50
      },
      {
        month: 'February',
        pastYearRev: 40
      },
      { month: 'March', pastYearRev: 100 }
    ]

    function loanExtractor (array) {
      const selectLoans = []
      for (let i = 0; i < array.length; i++) {
        const selectBorrower = array[i].loans
        for (let j = 0; j < selectBorrower.length; j++) {
          const eachLoan = selectBorrower[j]
          selectLoans.push(eachLoan)
        }
      }
      return selectLoans
    }

    const loans = loanExtractor(clients)

    function grouping (arr) {
      const res = Array.from(
        arr.reduce(
          (accumulator, { month, revenue }) =>
            accumulator.set(month, (accumulator.get(month) || 0) + revenue),
          new Map()
        ),
        ([month, revenue]) => ({ month, revenue })
      )
      return res
    }

    const groupedLoans = grouping(loans)

    function cumulator (arr) {
      const newArray = arr.map((obj, index, self) => {
        if (index === 0) return obj

        const prevO = self[index - 1]
        obj.revenue += prevO.revenue
        return obj
      })
      return newArray
    }

    const finalArray = cumulator(groupedLoans)
    console.log('final used to push to actual data is', finalArray)
    function pushDataToActual (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].month === actualRevData[i].month) {
          actualRevData[i].thisYearRev = arr[i].revenue
        }
      }
      return actualRevData
    }
    console.log(actualRevData)

    const finalChartData = pushDataToActual(finalArray)
    console.log('final chart data is', finalChartData)

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
        <Chart title="Last 6 Months (Revenue)" aspect={3 / 1} data={finalChartData}/>
        <ChartTest title="Last 6 Months (Revenue)" aspect={3 / 1} data={finalChartData}/>
      </div>
    )
  }
}

export default ClientsOverview
