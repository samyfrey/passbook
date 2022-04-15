import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'
import { deleteLoan } from '../../../api/loans'

export default function LoansTable ({ clients, user, setRender, msgAlert }) {
  async function handleDelete (user, loan, client) {
    const res = confirm('Are you sure you want to delete?')
    if (res) {
      try {
        console.log('loan is', loan)
        setRender(false)
        const loanId = loan._id
        const borrowerId = client._id
        console.log('loan id is', loanId)
        console.log('user is', user)
        console.log('client is', client)
        console.log('client id is', client._id)
        console.log('borrower id is', borrowerId)
        await deleteLoan(user, loanId, borrowerId)
        setRender(true)
        // msgAlert({
        //   heading: 'Transaction deleted',
        //   variant: 'success'
        // })
      } catch (error) {
        console.log('error is', error)
        // msgAlert({
        //   heading: 'Failed to load',
        //   message: error.message,
        //   variant: 'danger'
        // })
      }
    }
  }
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" size="small">Description Name</TableCell>
            <TableCell className="tableCell" size="small">Company Name</TableCell>
            <TableCell className="tableCell" align="right" size="small">Credit Limit <span className='amountStyle' >($MM)</span></TableCell>
            <TableCell className="tableCell" align="right" size="small">Status</TableCell>
            <TableCell className="tableCell" align="right" size="small">Actions</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map(client => (
            client.loans.map(loan =>
              <TableRow key={loan._id}>
                <TableCell >{loan.description}</TableCell>
                <Link to={`/clients/${client._id}`}>
                  <TableCell >
                    <div className="cellWrapper">
                      <img src={`https://logo.clearbit.com/${client.name}.com`} alt="" className="image" />
                      {client.name}
                    </div>
                  </TableCell>
                </Link>
                <TableCell size="small"align="right">{loan.amount}</TableCell>
                <TableCell size="small"align="right">
                  <span className={`status ${loan.status}`}>{loan.status}</span>
                </TableCell>
                <TableCell align="right">
                  <div className="cellAction">
                    <div className="viewButton">Edit</div>
                    <div className="deleteButton" onClick={() => handleDelete(user, loan, client)}>Delete</div>
                  </div>
                </TableCell>

              </TableRow>
            )

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
