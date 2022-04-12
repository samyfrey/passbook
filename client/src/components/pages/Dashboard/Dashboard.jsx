import './Dashboard.scss'
import React, { useEffect } from 'react'
// import Chart from '../../Chart/Chart'
// import { result } from '../../../dataManipulation'
// import ChartTest from '../../Chart/ChartTest'
import LoansTable from '../../Table/LoansTable'
import Chart from '../../Chart/Chart'
import { Spinner } from 'react-bootstrap'
import ProgressChart from '../../Table/ProgressChart'
// import BarChart from '../../Table/BarChart'

export const Dashboard = ({ clients, RevChartData, setRevChartData }) => {
  const actualRevData = [
    { month: 'January', pastYearRev: 50 },
    { month: 'February', pastYearRev: 40 },
    { month: 'March', pastYearRev: 100 },
    { month: 'April', pastYearRev: 110 },
    { month: 'May', pastYearRev: 130 },
    { month: 'June', pastYearRev: 145 },
    { month: 'July', pastYearRev: 200 },
    { month: 'August', pastYearRev: 200 },
    { month: 'September', pastYearRev: 210 },
    { month: 'October', pastYearRev: 230 },
    { month: 'November', pastYearRev: 240 },
    { month: 'December', pastYearRev: 250 }
  ]

  const budgetData = {
    thisYearBudget: 250,
    ytdRev: grandTotalRev(clients)

  }

  const progress = (budgetData.ytdRev * 100) / budgetData.thisYearBudget

  console.log(typeof budgetData.ytdRev)
  console.log(typeof budgetData.thisYearBudget)
  console.log(progress)

  useEffect(() => {
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
        if (actualRevData[i].month === arr[i].month) {
          actualRevData[i].thisYearRev = arr[i].revenue
        }
        // else {
        //   arr[i].revenue = arr[i - 1].revenue
        //   // arr[i].month = actualRevData[i].month
        //   actualRevData[i].thisYearRev = arr[i].revenue
      }

      // for (let i = 0; i < arr.length; i++) {
      //   if (arr[i].month === actualRevData[i].month) {
      //     actualRevData[i].thisYearRev = arr[i].revenue
      //   }
      // }
      return actualRevData
    }
    console.log(actualRevData)

    const finalChartData = pushDataToActual(finalArray)
    setRevChartData(finalChartData)
    console.log('final chart data is', finalChartData)
  }, []

  )
  function grandTotalRev (array) {
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
  if (!RevChartData) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }
  return (
    <div className='dashboard'>
      {/* <p>Revenues: {grandTotalRev(clients)}</p> */}
      <p>Revenues: {budgetData.ytdRev}</p>
      <Chart title="Year-over-Year(Revenue)" aspect={3 / 1} data={RevChartData}/>
      <LoansTable clients={clients}/>
      <ProgressChart title="YTD Revenue to Budget" aspect={2 / 1} progress={progress} />

    </div>
  )
}
