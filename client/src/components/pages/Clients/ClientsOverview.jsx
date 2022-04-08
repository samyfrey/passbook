import React from 'react'

import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import ListTable from '../../Table/ListTable'
import './Client.scss'
import Chart from '../../Chart/Chart'
// import { indexLoans } from '../../../api/loans'

const ClientsOverview = ({ clients }) => {
  // const [clients, setClients] = useState([])
  // // const [loans, setLoans] = useState([])
  // useEffect(() => {
  //   const fetchClients = async () => {
  //     try {
  //       const res = await indexClients()
  //       setClients(res.data.clients)
  //       // await console.log('index clients is', res)
  //     } catch (error) {
  //       console.log('error is', error)
  //     }
  //   }
  //   fetchClients()
  // }, [])

  if (!clients) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else {
    // const globalAmount = clients.map(client => {
    //   return client.loans.reduce((total, loan) => {
    //     return total + loan.amount
    //   }, 0)
    // })

    function grandTotal (array) {
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

    const totalRevenue = revenueTotal(clients)

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

    function grouping (arr) {
      const res = Array.from(arr.reduce(
        (m, { month, revenue }) => m.set(month, (m.get(month) || 0) + revenue), new Map()
      ), ([month, revenue]) => ({ month, revenue }))
      return res
    }

    // function cumulate (arr) {
    //   for (let i = 0; i < arr.length; i++) {
    //     const res = arr[i].amount + arr[i - 1].amount
    //   }
    //   return res
    // }
    const formattedData = loanExtractor(clients)
    console.log('formattedData is', formattedData)
    const loansGrouped = grouping(formattedData)
    result(loansGrouped)
    // function cumulator4 (arr) {
    //   for (let i = 1; i < arr.length; i++) {
    //     const previousMonth = arr[i - 1].amount
    //     let currentMonth = arr[i].amount
    //     currentMonth += previousMonth
    //   }
    //   return arr
    // }

    function result (arr) {
      arr.map((obj, index, self) => {
        if (index === 0) return obj

        const prevO = self[index - 1]
        obj.revenue += prevO.revenue
        return obj
      })
    }
    // console.log('previous month is', previousMonth)
    // console.log('current month is', currentMonth)
    // console.log('arr is', arr)
    // console.log('final array is', finalArray)
    // check whats wrong, output on front end is not hte same as node which is correct

    // const selectArray = array => {
    //   const sum = []
    //   for (let i = 0; i < array.length; i++) {
    //     const selectBorrower = array[i].loans
    //     for (let j = 0; j < selectBorrower.length; j++) {
    //       const myArray = selectBorrower[j].revenue
    //       sum.push(myArray)
    //     }
    //   }
    //   return sum
    // }

    // const findCumulativeSum = array => {
    //   const creds = array.reduce((acc, val) => {
    //     let { sum, res } = acc
    //     sum += val
    //     res.push(sum)
    //     return { sum, res }
    //   }, {
    //     sum: 0,
    //     res: []
    //   })
    //   return creds.res
    // }

    return (
      <div className='container'>
        <h1>Clients List</h1>
        <Link to='/clients/create'>
          <button>Add a client</button>
        </Link>w
        {/* {clients.map(client => (
        <ul key={client._id}>
          <Link to={`/clients/${client._id}`}>{client.name}</Link>
        </ul>
      ))} */}
        <p>Total loans: {grandTotal(clients)}</p>
        {/* <p>Cumulated {cumulate(clients)}</p> */}
        <p>Total revenue is: {totalRevenue}</p>
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
        <Chart title="Last 6 Months (Revenue)" aspect={3 / 1} data={loansGrouped}/>
      </div>
    )
  }
}

export default ClientsOverview
