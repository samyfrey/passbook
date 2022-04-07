import './Dashboard.scss'
import React from 'react'

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

    </div>
  )
}
