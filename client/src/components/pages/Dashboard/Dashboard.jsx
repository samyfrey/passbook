import './Dashboard.scss'
import React, { useEffect } from 'react'

import LoansTable from '../Loans/LoansTable'
import Chart from '../../Chart/Chart'
import { Spinner } from 'react-bootstrap'
import ProgressChart from '../../Table/ProgressChart'
import NewsFeed from '../../News/NewsFeed'
import { actualRevData, lastYearRevenueBudget } from '../../../globalData'
// import ShowLoan from '../Loans/ShowLoan'
export const Dashboard = ({ creditBudget, revenueBudget, clients, RevChartData, setRevChartData, user, msgAlert, setRender, setSelectClient }) => {
  const budgetData = {
    thisYearBudget: revenueBudget,
    ytdRev: grandTotalRev(clients),
    lastYearBudget: lastYearRevenueBudget

  }

  const progress = (budgetData.ytdRev * 100) / budgetData.thisYearBudget
  const differenceYTD = budgetData.thisYearBudget - budgetData.ytdRev

  const budgetStat = {
    progress: progress,
    differenceYTD: differenceYTD
  }
  // console.log(typeof budgetData.ytdRev)
  // console.log(typeof budgetData.thisYearBudget)
  // console.log(budgetStat)

  useEffect(() => {
    function loanExtractor (array) {
      const selectLoans = []
      for (let i = 0; i < array.length; i++) {
        const selectBorrower = array[i].loans
        for (let j = 0; j < selectBorrower.length; j++) {
          const eachLoan = selectBorrower[j]
          selectLoans.push(eachLoan)
          // console.log('select loan is', selectLoans)
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
    // console.log('groupedLoan is', groupedLoans)
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
    // console.log('final used to push to actual data is', finalArray)

    function pushDataToActual (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (actualRevData[i].month === arr[i].month) {
          actualRevData[i].thisYearRev = arr[i].revenue
        }
      }

      return actualRevData
    }
    // console.log(actualRevData)

    const finalChartData = pushDataToActual(finalArray)
    setRevChartData(finalChartData)
    // console.log('final chart data is', finalChartData)
  }, [])

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
  if (!RevChartData && budgetData) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }

  // console.log('revChart data is:', RevChartData)
  return (
    <div className='dashboard'>

      {/* <p>Revenues: {budgetData.ytdRev}</p> */}
      <div className="dashboardContainer">
        <div className="charts">

          <Chart className="revChart" title="Year-over-Year Revenue ($MM)" aspect={3 / 1} data={RevChartData}/>
          <ProgressChart className="progressChart"title="YTD Revenue to Budget" data={progress} budgetData={budgetData} budgetStat={budgetStat} />
        </div>
        <div className="listContainer">
          <div className="title">Latest Transactions</div>

          <LoansTable clients={clients} user={user} msgAlert={msgAlert} setRender={setRender} setSelectClient={setSelectClient}/>
        </div>
        <div className="listContainer">

          <div className="title">Latest News</div>

          <NewsFeed/>
        </div>
      </div>

    </div>
  )
}
