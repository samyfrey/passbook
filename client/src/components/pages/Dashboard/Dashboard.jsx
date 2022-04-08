import './Dashboard.scss'
import React from 'react'
// import Chart from '../../Chart/Chart'
// import { result } from '../../../dataManipulation'
import ChartTest from '../../Chart/ChartTest'
export const Dashboard = ({ clients }) => {
  function grandTotal (array) {
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
    <div className='dashboard'>
      <p>Revenues: {grandTotal(clients)}</p>
      {/* <Chart title="Last 6 Months (Revenue)" aspect={3 / 1} data={result(clients)}/> */}
      <ChartTest />
    </div>
  )
}
